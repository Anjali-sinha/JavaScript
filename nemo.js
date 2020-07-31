const nemo=['nemo'];

function findNemo(array)
{
  for(let i=0;i<array.length;i++)
  {
    let t0=performance.now();
    if(array[i]==='nemo')
    {
      console.log('Found Nemo!');
    }
  }
  let t1=performance.now();
  console.log('Call to find nemo took ' + (t1-t0) + 'milliseconds');
}

findNemo(nemo);
