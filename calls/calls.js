var contacts = [{
  name : 'Tom',
  phone : 1234567890,
  pic : '/images/client1.png'
},
{
  name : 'Jone',
  phone : 0987654321,
  pic : '/images/client2.png'
}]

for(let i = 0; i < contacts.length; i++){
  addChat(contacts[i].name, contacts[i].phone, contacts[i].pic)
}

function addChat(name, phone, pic) {
  const TEM = document.createElement('div')
  const NAME = document.createElement('strong')
  const PIC = document.createElement('img')
  const I = document.createElement('i')
  
  
  NAME.append(name)
  PIC.append(pic)
  
  TEM.classList.add('user-tem')
  
  NAME.classList.add('name')
  
  I.setAttribute('class', 'bi bi-telephone-inbound-fill')
  
  PIC.src = pic
  PIC.classList.add('display-pic')
  
  TEM.append(PIC, NAME, I)
  
  document.body.append(TEM)
  
}


