<script>
    let phrase = ['Hi! My Name is Edgar Rodriguez!', 'Im a Computer scientist'];
    let typedChars = [];
    let index = 0;
    let i = 0;
    let typing;

    const type = () => {
        if (typedChars.length < phrase[i].length){
            if (index < phrase[i].length) {
                typedChars += phrase[i][index];
                index++;
                setTimeout(type, 100);
            }
            else{
                clearInterval(typing);
            }
        }
        else{
            if (i+1 < phrase.length){
                setTimeout(clearTyping, 800);
                setTimeout(type, 800);
                index = 0;
                i++;
            }
            else{
                
                clearInterval(typing);
            }
        }

    };

    const clearTyping = () => {
        typedChars = '';
    };
    
    const startTyping = () => {
            typing = setInterval(type(), 800);
    };
    
    //  phrase.forEach(element => {
    //      while (typedChars.length < element.length) {
    //          startTyping(element);
    //      }
    //  });

    startTyping(phrase);
   
    
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-red-900">
    <div class="text-8xl p-12 font-Dalton text-yellow-300 tracking-widest">
        <h1>{typedChars}</h1>

    </div>
</div>