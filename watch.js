  const productForm = document.getElementById('productForm');
  const productTableBody = document.getElementById('productTableBody');
  const totalAmountSpan = document.getElementById('totalAmount');
  const sellButton = document.getElementById('sellButton');

  let products = [];

  productForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name && !isNaN(price)) {
      const product = { id: Date.now(), name, price };
      products.push(product);
      addProductToTable(product);
      updateTotal();
      productForm.reset();
    }
  });

  function addProductToTable(product) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.innerText = product.name;

    const priceCell = document.createElement('td');
    priceCell.innerText = product.price.toFixed(2);

    const removeCell = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.onclick = () => {
      var c = confirm(' Do You Want To Remove That');
      if(c === true){
      products = products.filter(items => items.id !== product.id);
      row.remove();
      updateTotal();
      }
    };
    removeCell.appendChild(removeBtn);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(removeCell);

    productTableBody.appendChild(row);
  }
  function updateTotal() {
    const total = products.reduce((sum, p) => sum + p.price, 0);
    totalAmountSpan.innerText = total.toFixed(2);
  }
  total.reset();


  function saveData() {
    localStorage.setItem("data",)
  }