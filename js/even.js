        const greenButton = document.getElementById('btnGreen');
        greenButton.onclick = makeGreen;

        
        function makeGreen(){
            document.body.style.backgroundColor = 'green';
        }


       function makeGray(){
           document.body.style.backgroundColor = 'gray';
        //    document.h1.style.color ='red'
       }

       const goldenButton = document.getElementById('GoldenRod');
       goldenButton.addEventListener('click',makeGoldenRod);

       function makeGoldenRod(){
           document.body.style.backgroundColor = 'goldenrod';
       }

       document.getElementById('lightBlue').addEventListener('click',function(){
           document.body.style.backgroundColor = 'lightblue'
       })