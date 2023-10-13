
//  File javascript i jashtem , i lidhur me filen rezervo takim.html

// ky funksion sherben qe mesazhi te textarea te jete me me shume se 20 karaktere dhe ne kur ka me pak nxjerr alertin 

    // ky funksion sherben qe emri dhe mbiemri te mos jene bosh sepse njerr alertin, dhe inputi i tel te kete vetem numra dhe te ket 10 numra   
    function validateForm() {
      let x = document.forms["myForm"]["emri"].value;
      let y = document.forms["myForm"]["mbiemri"].value;
      let tel = document.forms["myForm"]["tel"].value;
      let email = document.forms["myForm"]["email"].value;
      let isNumeric = /^\d+$/.test(tel);
      let z = document.forms["myForm"]["mesazhi"].value;
        if (x.length == 0) {
          alert("Ploteso emrin.");
          return false;
         }

         if (y.length == 0) {
             alert("Ploteso mbiemrin.");
             return false;
          }
          
          if (email.length == 0) {
            alert("Ploteso emailin.");
            return false;
         }
          if (!isNumeric || tel.length !== 10) {
              alert("Numri i telefonit duhet te permbaj vetem numra dhe 10 numra.")
              return false;
          }

         if (z.length<20) {
          alert("Duhen te pakten 20 karaktere te kutia lini nje mesazh");
          return false;
        }

        return true;
      }

  // ky funksion sherben qe kur  mesazhi te textarea eshte me me pak se 20 karaktere borderi i textareas te jet ngjure e kuqe , mbi 20 karaktere te dali jeshile
  $(document).ready(function(){
  $("textarea").blur(function(){
      let x = $(this).val(); // Merr vleren e  textarea
      if (x.length < 20) {
          $(this).css("border-color", "red");
          $(this).css("border-width", "5px");
      } else {
          $(this).css("border-color", "green");
          $(this).css("border-width", "5px");
      }
  });
});

// Funksioni me poshte ben te mundur qe te ndryshoj madhesia e logos, dhe te shkoj ne gjendjen fillestare
$(document).ready(function() {
      $("#meshini").hover(function() {
          // Mouseenter: ndryshon madhesin e tekstit kur kalojm me mouse
          $(this).css("font-size", "100px");
          $(this).css("color", "#3A1720");
      }, function() {
          // Mouseleave: shkon ne madhesin orgjinale te tekstit kur largojme mouse
          $(this).css("font-size", "35px");
          $(this).css("color", "black)");
      });
  });


// Funksioni me poshte ben te mundut qe te inputi subscribe te kontrolloj nese inputi i emailit eshte bosh

  function subsEmail(){
    let email = document.forms["myForm21"]["email"].value;

    if (email.length == 0) {
        alert("Ploteso emailin.");
        return false;
     }
     return true
  }