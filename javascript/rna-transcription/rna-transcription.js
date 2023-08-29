//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = "";

  while (dna.length > 0) {
    switch (dna.at(0)) {
      case 'G':
        rna = rna.concat('C');
        break;
      case 'C':
        rna = rna.concat('G');
        break;
      case 'T':
        rna = rna.concat('A');
        break;
      case 'A':
        rna = rna.concat('U');
        break;
    }
    dna = dna.slice(1);
  }

  return rna;
};
