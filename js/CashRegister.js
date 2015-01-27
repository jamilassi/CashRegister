function CashRegister(){
    
    // Notifies me of the creation of the Cash Register
    console.log("Create the cash register");
    
    // Used to store the first lines of each bill
    var header = new Array();
     
    // Number used to calculate service tax
    var TPS = 0.5;
    
    // Number use to calculate sales tax
    var TVQ = 0.995;
    
    // Returns the amount to be added to the subtotal
    // @subtotal Number
    function AddTax(subtotal){
        
        return total;
    }
    
    // Object type : Bill
    function Bill(){
        this.date = new Date();
        this.items = new Array();
        this.subtotal = 0;
        this.total = 0;
        
        // Goes over each item of the bill and sets the total
        this.calculateTotal = function(){
            
        }
        
        // Goes over each item in the bill and renders the output
        this.printBill = function(){
            
        }
        
        // Shows the items being added to the bill
        this.displayItems = function(){
        
        }
    
    }
    
    function generateReference(){

    }

    function Transaction(){
        
        this.started = new Date();
        
        this.reference = generateReference();
        
        this.bill = new Bill();
        
        // Refund, Charge
        this.type = "Charge";
        
        // Cash, Visa, MasterCard
        this.paymentMethod = 1;
        
        // Use the bill total to calculate the change
        this.calculateChange = function(){
            
            return change;
        }
    }
    
    // Used to store all activity on the register
    var transactions = new Array();
    
    
    // Used to store items for this transaction
    var bills = new Array();
   
    // Used to lookup an item using the product code
    // @code String
    function ScanItem(code){
        
        return item;
    }
    
    // Prints out all the stored transactions
    function ShowAllTransactions(){    
        
    }
    
}