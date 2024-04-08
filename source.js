
// let user = prompt("Kullanıcı adınızı giriniz: ");
// let age = prompt("Lütfen yaşınızı giriniz: ");


// login (user, password);

// function login(user, password)
// {
//     if(user != "" )
//     {
//         if(age > 18){
//             console.log("Kullanıcı bilgileri kaydedilmiştir");
//         }
//         if(age < 18)
//         {
//             console.log("Yasal olarak bu programa kayıt olmanız mümkün değildir.");

//         }
//           }else{
//             console.log("Kullanıcı alanını boş bırakmayın.");
//         }

// } 


//   let ad = prompt("İsminizi giriniz: ");
//   let tckn = prompt("tckn giriniz: ");

//   check (ad, tckn);

// function check(ad,tckn) 
// {
//      if(tckn.length == 11)
//      {
//               if (ad != "")
//               {console.log("Başarıyla giriş yaptınız.");
//             }else{console.log("Lütfen isminizi doğru bir şekilde girdiğinizden emin olunuz.");}

//      }else{console.log("TCKN eksik girdiniz")}} 




//Beden Kitle Endeksi

// let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz: "));
// let kilo = Number(prompt("Lütfen kilonuzu giriniz: "));

// let ort = kilo/(boy^2);

// Kindex(boy, kilo,ort);

// function Kindex(boy, kilo,ort)
// {
//     if(ort < 18){
//         console.log("İdeal kilonun altındasınız");
//     } 
//    else if (ort >= 18,5 && ort <= 24,9)
//     {
//         console.log("Vücut kitle endeksiniz: " + ort + ". İdeal kilodasınız.");
//     }
//     else if(ort >= 25 && ort <= 29,9)
//     {
//         console.log("Vücut kitle endeksiniz: " + ort + ". İdeal kilonun üzerindesiniz.");
//     }
//     else if(ort >= 30 && ort <= 39,9)
//     {
//         console.log("Vücut kitle endeksiniz: " + ort + ". İdeal kilonun çok üzerindesiniz.(obez)");
//     }
//     else if(ort >= 40 && ort <= 49,9)
//     {
//         console.log("Vücut kitle endeksiniz: " + ort + ". İdeal kilonun çok çok üzerindesiniz.(morbid obez)");
//     }

// }



/// Benzin İstasyonu


// let dizel = 42, benzin = 41.90, lpg = 21;
// const newLine = "\r\n"


//         const fuelText = "1-Dizel" + newLine 
//         + "2-Benzin " + newLine 
//         + "3-LPG" + newLine
//         + "Yakıt türünü seçiniz";


// let fuelType = Number(prompt(fuelText));
// let Litre = Number(prompt("Yakıt litresi"));
// let bakiye = Number(prompt("Bakiyenizi giriniz"));

// if(fuelType == "1"){
//     //Dizel 
//     let tutar = dizel * Litre;
//     if(tutar < bakiye)
//     {
//         bakiye1= bakiye - tutar;
//         alert("Yakıt alma işlemi başarılı" + newLine +
//         "Kalan Bakiye: " + (bakiye1));
//     }else{
//     //bakiye yetersiz
//         alert("Bakiyeniz yeterli değil." + newLine
//         + "Ödenecek Tutar: " + tutar + newLine
//         + "Bakiye: " + bakiye + newLine
//         + "Eksik Tutar: " + (tutar-bakiye));}
//     }else if (fuelType == "2")
//     {//benzin 

//         let tutar = benzin * Litre;
//     if(tutar < bakiye){

//         bakiye1 = bakiye - tutar;
//     //bakiyeniz yeterli
//         alert("Yakıt alma işlemi başarılı" + newLine +
//         "Kalan Bakiye: " + (bakiye1));
//     }}else {
//     //bakiye yetersiz
//         alert("Bakiyeniz yeterli değil." + newLine
//     + "Ödenecek Tutar: " + tutar + newLine
//     + "Bakiye: " + bakiye + newLine
//         + "Eksik Tutar: " + (tutar-bakiye));   
//    }else if(fuelType == "3")
//     {
//     // lpg

//         let tutar = benzin * Litre;
//         if(tutar < bakiye){
//         bakiye1 = bakiye - tutar;
//     //bakiyeniz yeterli
//         alert("Yakıt alma işlemi başarılı" + newLine +
//         "Kalan Bakiye: " + (bakiye1));
//     }}else {
//     //bakiye yetersiz
//         alert("Bakiyeniz yeterli değil." + newLine
//     + "Ödenecek Tutar: " + tutar + newLine
//     + "Bakiye: " + bakiye + newLine
//         + "Eksik Tutar: " + (tutar-bakiye));  

//     }else 
//     {
//         alert("Lütfen bir yakıt türü seçiniz !");
//     }  

// Days

let newLine = "\r\n";
// let Days = "1-Pazartesi" + newLine +
//     "2-Salı" + newLine +
//     "3-Çarşamba" + newLine +
//     "4-Perşembe" + newLine +
//     "5-Cuma" + newLine +
//     "6-Cumartesi" + newLine +
//     "7-Pazar" + newLine +
//     "Lütfen 1 ile 7 arasında bir değer seçiniz.";

// let day = prompt(Days);

// switch (day) {
//     case "1":
//         console.log("Pazartesi");
//         break;
//     case "2":
//         console.log("Salı");
//         break;
//     case "3":
//         console.log("Çarşamba");
//         break;
//     case "4":
//         console.log("Perşembe");
//         break;
//     case "5":
//         console.log("Cuma");
//         break;
//     case "6":
//         console.log("Cumartesi");
//         break;
//     case "7":
//         console.log("Pazar");
//         break;
//     default:
//         console.log("Lütfen geçerli bir değer giriniz");
//         break;
// } 


// ATM 
//1- Bakiye Görüntüleme
//2- Para Çekme
//3- Para Yatırma
//4- Çıkış


// let choose = 
//     "Lütfen yapmak istediğiniz işlemin numarasını giriniz!" +
//     newLine + "1- Bakiye Görüntüleme" +
//     newLine + "2- Para Çekme" +
//     newLine + "3- Para Yatırma" +
//     newLine + "4- Çıkış";


// let bakiye = 5000;
// let islem = prompt(choose);

// switch (islem) {
//     case "1":
// alert("Bakiyeniz: "+ bakiye)
//         break;

//     case "2":
//        let tutar= prompt("Çekmek istediğiniz tutarı giriniz: ");
// if(bakiye < tutar)
// {
//     alert("Bakiye yetersiz."+newLine+"Çekmek istediğiniz tutar: "+tutar+"Bakiyeniz: "+bakiye);
// }else{
//     alert("Para çekme işlemi başarılı."+newLine+"Kalan bakiyeniz: "+bakiye-tutar);

// }
//         break;

//     case "3":

// let tutarY= prompt("Yatırmak istediğiniz tutarı giriniz: ");

// alert("Para yatırma işlemi başarılı."+newLine+"Güncel bakiyeniz: "+yeniBakiye);
//         break;

//     case "4":
// alert("Başarıyla çıkış yaptınız.")
//         break;

//     default:
// alert("Lütfen geçerli bir işlem numarası giriniz!")
//     break;
// }


// ////////////////////////////

// for(let i = 1; i<=10; i++){
//    console.log(i);
// }

// for(i=0;i<=10;i+=2){
//     console.log(i);
// }

// for(let i = 0; i<=10; i++)
// {
//     if(i%2==0)
//     {
//         console.log(i + " Hi");
//     }else{
//         console.log(i+ " how are you");
//     }
// }


///////For Döngüsü
// let sum =0;
// for (let i = 0; i<=50; i++)
// {
//     console.log(i);
//    sum =+ i;


// }console.log("sum:"+sum);

/// 1-10 yazdır

// let counter = 1;

// while (counter <= 10) {
//     console.log(counter);
//     counter++;

// }

// çift tek

//let counter1 = 0;
// while(counter1 <= 10){
//     if(counter1 % 2 == 0)
//     {
//         console.log(counter1 + ": çift");
//     }else{
//         console.log(counter1 + ": tek");
//     }
//     counter1 ++;
// }


// while (true) {
//     console.log(counter1);
//     if (counter1 == 6) {
//         break;
//     }
//     counter1++;
// } 
 
// let counter = 1;

// do {
//     console.log(counter);
//     counter++;
// } while (counter<=5); 


//1-20 tek sayıları topla


// let counter = 1;
// let sum = 0;

// do {
//     if (counter %2 == 1){
//         sum += counter;
//     }counter ++;
    
// } while (counter <= 20);
// console.log("Toplam: "+ sum); 

let counter =1;

while(counter <= 10)
{
    console.log(counter);
    if(counter == 8)
    {
        break;
    }counter++;
}
