// 생산 현황 데이터
const productionData = [
    { orderId: '001', product: 'Product A', status: '진행 중', progress: 45 },
    { orderId: '002', product: 'Product B', status: '완료', progress: 100 },
    { orderId: '003', product: 'Product C', status: '대기', progress: 0 },
];

// DOM 요소 참조
const productionTable = document.getElementById('production-table').getElementsByTagName('tbody')[0];
const orderForm = document.getElementById('order-form');
const orderList = document.getElementById('order-list');
const dataForm = document.getElementById('data-form');

// 생산 현황 테이블에 데이터 추가
function updateProductionTable() {
    productionTable.innerHTML = '';
    productionData.forEach(data => {
        const row = productionTable.insertRow();
        row.innerHTML = `
            <td>${data.orderId}</td>
            <td>${data.product}</td>
            <td>${data.status}</td>
            <td>${data.progress}%</td>
        `;
    });
}

// 작업 지시 추가
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const orderId = Date.now().toString(); // 고유한 작업 ID 생성

    productionData.push({ orderId, product, status: '대기', progress: 0 });

    const orderItem = document.createElement('li');
    orderItem.textContent = `${product} - ${quantity}개`;
    orderList.appendChild(orderItem);

    updateProductionTable(); // 생산 현황 업데이트
    orderForm.reset(); // 폼 초기화
});

// 생산 데이터 입력
dataForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = document.getElementById('order-id').value;
    const status = document.getElementById('status').value;
    const progress = document.getElementById('progress').value;

    const order = productionData.find(order => order.orderId === orderId);
    if (order) {
        order.status = status;
        order.progress = progress;
        updateProductionTable(); // 생산 현황 업데이트
    }
    dataForm.reset(); // 폼 초기화
});

// 초기화
updateProductionTable();
