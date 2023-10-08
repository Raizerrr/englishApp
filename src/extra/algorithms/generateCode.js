function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let orderId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      orderId += randomCharacter;
    }
  
    return orderId;
}

export default generateRandomCode;