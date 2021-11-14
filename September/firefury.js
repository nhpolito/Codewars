var fireAndFury = function(tweet) {

    let matches = tweet.match(/(FURY|FIRE)/g);
  
    if (/[^EFIRUY]/.test(tweet) || !matches)
      return 'Fake tweet.';
  
    return matches
       .join('')
       .match(/(FURY|FIRE)\1*/g)
      .map(match => {
      
        let terms = match.length / 4 - 1;
        console.log(match[1])
        return match[1] === 'I'
          ? 'You ' + 'and you '.repeat(terms) + 'are fired!'
          : 'I am ' + 'really '.repeat(terms) + 'furious.';
          
      })
    //   .join(' ');
    
  }

console.log(fireAndFury("FIREFIREFIREFURY"));
