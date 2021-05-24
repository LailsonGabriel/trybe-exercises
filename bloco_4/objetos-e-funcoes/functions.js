var farolCarro = 'desligado'


function farol() {
  if(farolCarro === 'desligado') {
    farolCarro = 'ligado'
  } else {
    farolCarro = 'desligado'
  }
  return farolCarro
}