class Product {
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct (product) {
        const productList = document.querySelector('#product__list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mt-2">
                <div class="card-body">
                    <b>Product</b>: ${product.name}
                    <b>Price</b>: ${product.price}
                    <b>Year</b>: ${product.year}
                    <a class="btn btn-danger mb-4" name="delete">Delete</a>

                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm () {
        const form = document.querySelector('#product__form');
        form.reset();
    }

    deleteProduct (element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted successfully', 'danger');
        }
    }

    showMessage (message, cssClass) {

        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));

        //showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('.app');
        
        container.insertBefore(div, app);

        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 3000)
            
    }
}

//DOM EVENTS
const button = document.querySelector('#product__form');
button.addEventListener('submit', (e) => {
    const nameValue = document.querySelector('#name').value;
    const priceValue = document.querySelector('#price').value;
    const yearValue = document.querySelector('#year').value;
    
    const product = new Product(nameValue, priceValue, yearValue);
    const ui = new UI();

    if(nameValue === '' || priceValue === '' || yearValue === ''){
        ui.showMessage('Complete fields required', 'info');
    }else{
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage("Product added sucessfully", 'success');
    }
    
    e.preventDefault();
});

document.querySelector('#product__list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);

});