function getInfo(){
    const nameInput = document.getElementById('username') as HTMLInputElement
    const name: string=nameInput.value;

        const emailInput = document.getElementById('username') as HTMLInputElement
    const email: string=emailInput.value;

        const ageInput = document.getElementById('username') as HTMLInputElement
    const age: string=ageInput.value;

    console.log(name,email,age);
}