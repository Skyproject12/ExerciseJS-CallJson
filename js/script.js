function tampilkanSemuaMenu(){
    
    $.getJSON('data/pizza.json', function(data){
        // menampung pizza.json dalam suatu variable  
        let menu= data.menu; 
        // melakukan suatu perulangan 
        $.each(menu, function(i, data){ 
            $('#daftar-menu').append('<div class="card mb-3"><img src="img/menu/'+data.gambar+'" class="card-img-top" ><div class="card-body"><h5class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">'+data.harga+'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div>');
        });
    }); 

}
// melakukan perulangan sebanyak 14 kali sesuai dengan jumlah dari data

// membuat menampilkan semua menu
tampilkanSemuaMenu();

// cari kelas dengan nama nav-link
$('.nav-link').on('click', function(){
    // semua li di remove Classs activenya
    $('.nav-link').removeClass('active'); 
    // khusus li yang di klik tambahkan kelas baru berupa active
    $(this).addClass('active');

    // menyimpan li yang di klik dalam bentuk html 
    let kategori= $(this).html(); 
    $('h1').html(kategori);
    // memanggil kelas h1 lalu setHtmlnya menjadi kategori

    // menampilkan allMenu
    if(kategori=='All Menu'){
        tampilkanSemuaMenu(); 
        //  membuat suatu proses dalam function berhenti
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        // data menampung hasil dari json 
        let menu= data.menu; 
        let content= ''; 
        $.each(menu, function(i, data){
            // mengecek jika kategori sama dengan kategori dari file json  
            if(data.kategori == kategori.toLowerCase()){ 
                content +='<div class="col-md-4"><div class="card"><img src="img/men'+data.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+data.harga+'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div> </div>'}
        }); 
        $('#daftar-menu').html(content);
    });

});