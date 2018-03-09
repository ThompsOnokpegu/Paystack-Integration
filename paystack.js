function payWithPaystack(){
  var handler = PaystackPop.setup({
    key: 'pk_test_85e33e****************************',
    email: document.getElementById('email').value,
    amount: document.getElementById('amount').value,
    metadata: {
       custom_fields: [
          {
              display_name: "Application ID",
              variable_name: "app_ID",
              value: document.getElementById('AppID').value
          },
          {
              display_name: "Programme",
              variable_name: "programme",
              value: document.getElementById('program').value
          }
       ]
    },
    callback: function(response){
        //alert('success. transaction ref is ' + response.reference);
        window.location.replace('http://www.yourdomain.com.ng/product.php');

    },
    onClose: function(){
        alert('window closed');
    }
  });
  handler.openIframe();
}
