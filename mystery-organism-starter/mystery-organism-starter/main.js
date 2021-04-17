// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
  
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      for (let i = 0; i <dna.length; i++) {
        let changedBase = returnRandBase();
        if  (this.dna[i] === changedBase) {
          changedBase = returnRandBase();
        }
        this.dna[i] = changedBase;
      }
      return this.dna;
    },

    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },

    willLikelySurvive() {
      
      const result = this.dna.filter(el => el === 'C' || el === 'D');
    return result.length / this.dna.length >= 0.6;
     }
    
    };
    
};
let finalArr = [];
let idCounter = 1;
while (finalArr.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive())
  {finalArr.push(newOrg);
  }
  idCounter++;
}

console.log(finalArr);








