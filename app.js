
const distance = (a, b) => {
	// TODO: implement the function
   if(typeof a === 'string' || a instanceof String && typeof b === 'string' || b instanceof String)
   {
	const track = Array(b.length + 1).fill(null).map(() =>
   Array(a.length + 1).fill(null));
   for (let i = 0; i <= a.length; i += 1) 
   {
      track[0][i] = i;
   }
   for (let j = 0; j <= b.length; j += 1) 
   {
      track[j][0] = j;
   }
   for (let j = 1; j <= b.length; j += 1) 
   {
      for (let i = 1; i <= a.length; i += 1) 
      {
         const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1, 
            track[j - 1][i] + 1, 
            track[j - 1][i - 1] + indicator, 
         );
      }
   }
   return track[b.length][a.length];
   }
	else 
   {
      throw new Error(`InvalidType`);
  }
}
module.exports.distance = distance


