function prosesBMI() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const rumus = berat / ((tinggi / 100) ** 2);

    const hasil = document.getElementById("hasil");
    hasil.innerHTML = `BMI kamu yaitu ${rumus.toFixed(1)} .`;

    if(tinggi >= 20 && berat >= 1){
            if (rumus < 18.5) {
                hasil.innerHTML += "Kamu kekurangan berat badan";
            } else if (rumus >= 18.5 && rumus < 25) {
                hasil.innerHTML += "Berat badan kamu normal";
            } else if (rumus >= 25 && rumus < 30) {
                hasil.innerHTML += "Kamu kelebihan berat badan";
            } else if(rumus >= 30){
                hasil.innerHTML += "Kamu mengalami obesitas";
            }

    }else if (isNaN(berat) && tinggi >= 20) {
            hasil.innerHTML = "Tolong isi berat badan kamu!";
            return;
    }else if (isNaN(tinggi) && berat >= 1) {
            hasil.innerHTML = "Tolong isi tinggi badan kamu!";
            return;
    }else if(tinggi < 20 && !(isNaN(berat))){
            hasil.innerHTML = "Tolong isi tinggi badan anda dengan benar!";
            return;
    }else if(berat < 1 && !(isNaN(tinggi))){
            hasil.innerHTML = "Tolong isi berat badan anda dengan benar!";
            return;
    }else if(isNaN(berat) && isNaN(tinggi)){
            hasil.innerHTML = "Tolong isi berat badan dan tinggi badan anda!";
            return;
    }else{
            hasil.innerHTML = "Tolong isi dengan benar!";
            return;
    }
   
}
