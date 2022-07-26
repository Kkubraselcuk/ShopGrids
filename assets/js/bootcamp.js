var MoneyList = ["$ USD", "€ EURO", "$ CAD", "₹ INR", "¥ CNY", "৳ BDT"]; 
var LanguageList = ["English", "Español", "Filipino", "Français", "العربي", "हिन्दी","বাংলা"];
var AllCategoriesList = ["Electronics", "accessories", "Televisions","best selling","top 100 offer","sunglass","watch","man’s product","Home Audio & Theater","Computers & Tablets ","Video Games","Home Appliances"];
var NavbarList = ["Home","Pages","Shop","Blog","Contact Us"];
var InformationList = ["About Us","Contact Us","Downloads","Sitemap","FAQs Page"];
var ShopDepartmentsList = ["Computers & Accessories","Smartphones & Tablets","TV, Video & Audio","Cameras, Photo & Video","Headphones"];
var CardList = [];
var BannerProductList = [
    {Name : "Smart Watch 2.0",
    Description : "Space Gray Aluminum Case with <br>Black/Volt Real Sport Band ",
    ButtonTitle :"View Details",
    ImgUrl : "assets/images/banner/banner-1-bg.jpg"},
    {Name : "Smart Headphone",
    Description : "Lorem ipsum dolor sit amet, <br>eiusmod tempor incididunt ut labore.",
    ButtonTitle :"Shop Now",
    ImgUrl : "assets/images/banner/banner-2-bg.jpg"}
];
var ProductList = [
    {Title : "No restocking fee ($35 savings)",
        Name : "M75 Sport Watch",
        Description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Price : "$320.99",
        ImgUrl : "assets/images/hero/slider-bg1.jpg"}, 
    {Title : "Big Sale Offer",
        Name : "Get the Best Deal on CCTV Camera",
        Description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Price : "$590.00",
        ImgUrl : "assets/images/hero/slider-bg2.jpg"}
];
var TrendingProduct =[
    {Category :"Watches",
        Name:"Xiaomi Mi Band 5",
        ImgUrl: "assets/images/products/product-1.jpg",
        Price :"$199.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: false,
        Review: 4
    }, 
    {Category :"Speaker",
        Name:"Big Power Sound Speaker",
        ImgUrl: "assets/images/products/product-2.jpg",
        Price :"$275.00",
        DiscountPrice:"$300.00",
        SaleTag:"-25%",
        NewTag: true,
        Review: 5
    }, 
    {Category :"Camera",
        Name:"WiFi Security Camera",
        ImgUrl: "assets/images/products/product-3.jpg",
        Price :"$399.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: false,
        Review: 2
    }, 
    {Category :"Phones",
        Name:"iphone 6x plus",
        ImgUrl: "assets/images/products/product-4.jpg",
        Price :"$400.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: true,
        Review: 5
    }, 
    {Category :"Headphones",
        Name:"Wireless Headphones",
        ImgUrl: "assets/images/products/product-5.jpg",
        Price :"$350.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: false,
        Review: 5
    }, 
    {Category :"Speaker",
        Name:"Mini Bluetooth Speaker",
        ImgUrl: "assets/images/products/product-6.jpg",
        Price :"$70.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: false,
        Review: 4
    }, 
    {Category :"Headphones",
        Name:"PX7 Wireless Headphones",
        ImgUrl: "assets/images/products/product-7.jpg",
        Price :"$100.00",
        DiscountPrice:"$200.00",
        SaleTag:"-50%",
        NewTag: false,
        Review: 4
    }, 
    {Category :"Laptop",
        Name:"Apple MacBook Air",
        ImgUrl: "assets/images/products/product-8.jpg",
        Price :"$899.00",
        DiscountPrice:"",
        SaleTag:"",
        NewTag: false,
        Review: 5
    }
];
var ShippingInfoList = [
    {IconClass:"lni lni-delivery",
        Title: "Free Shipping",
        Description: "On order over $99"
    },
    {IconClass:"lni lni-support",
        Title: "24/7 Support.",
        Description: "Live Chat Or Call."
    },
    {IconClass:"lni lni-credit-cards",
        Title: "Online Payment.",
        Description: "Secure Payment Services."
    },
    {IconClass:"lni lni-reload",
        Title: "Easy Return.",
        Description: "Hassle Free Shoppin g."
    }
];

function ShowProduct(){ //Çalışmıyor
    var DvProduct = document.getElementById("DvProduct");
    ProductList.forEach((AValue)=>{
        var liOutput =`<div class="single-slider" style="background-image: url(${AValue.ImgUrl});">
                                <div class="content">
                                    <h2><span>${AValue.Title}</span>${AValue.Name}</h2>
                                    <p>${AValue.Description}</p>
                                    <h3><span>Now Only</span> ${AValue.Price}</h3>
                                    <div class="button"}>
                                        <a href="product-grids.html" class="btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>`;
                            DvProduct.innerHTML += liOutput;
    });
}
function AddShopProduct(IArray){
    IArray.forEach((IValue)=>{
        alert(IValue.Title);
    });
}
function ShowTrendingProduct(){
    var DvTrendingProduct = document.getElementById("DvTrendingProduct");
    TrendingProduct.forEach((AValue, AIndex, AArray)=>{
        // ${onchange=`${AddToCard(AValue.Name)}`}
        var ResultDiscountPrice = `${AValue.DiscountPrice !== "" ? `<span class='discount-price'>${AValue.DiscountPrice}</span>` : ``}`;
        var ResultNewTag = `${AValue.SaleTag !== "" ? `<span class="sale-tag">${AValue.SaleTag}</span>` : (AValue.NewTag === true ? `<span class="new-tag">New</span>` :``) }`;     
        var liOutput =`
        <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Product -->
            <div class="single-product">
                <div class="product-image">
                    <img src="${AValue.ImgUrl}" alt="#">
                        `+ ResultNewTag +`
                    <div class="button"  onclick="AddShopProduct(${AValue});"> 
                        <button href="#" class="btn"><i class="lni lni-cart"></i> Add to Cart</button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="category">${AValue.Category}</span>
                    <h4 class="title"><a href="product-grids.html">${AValue.Name}</a></h4>
                    <ul class="review"> 
                    ${ShowReview(AValue.Review)}
                        <li><span>${AValue.Review} Review(s)</span></li>
                    </ul>
                    <div class="price"><span>${AValue.Price}</span> `+ ResultDiscountPrice +`</div>
                </div>
            </div>
            <!-- End Single Product -->
        </div>`;

        DvTrendingProduct.innerHTML += liOutput;
    });
}
function ShowReview(AValueReview){
    var LiOutput = ``;
    for(var i = 0; i< AValueReview; i++){
        LiOutput += '<li><i class="lni lni-star-filled"></i></li>';
    }
    for(var i = 0; i< 5-AValueReview; i++){
        LiOutput += '<li><i class="lni lni-star"></i></li>';
    }
    return LiOutput;
}
function ShowBannerProduct(){
    var DvBannerProduct = document.getElementById("BannerProduct");
    BannerProductList.forEach((AValue)=>{
        var liOutput =`
        <div class="col-lg-6 col-md-6 col-12">
            <div class="single-banner" style="background-image:url('${AValue.ImgUrl}')">
                <div class="content">
                    <h2>${AValue.Name}</h2>
                    <p>${AValue.Description}</p>
                    <div class="button">
                        <a href="product-grids.html" class="btn">${AValue.ButtonTitle}</a>
                    </div>
                </div>
            </div>
        </div>`;
        DvBannerProduct.innerHTML += liOutput;
    });
}
function AddMoneyList(){
    var CmbMoney = document.getElementById("select4");
    CmbMoney.innerHTML ="";
    MoneyList.forEach((AValue, AIndex)=>{
        var option = document.createElement("option");
        option.value = AIndex;
        option.text = AValue;
        CmbMoney.add(option);

    });
};
function AddLanguageList(){
    var CmbLanguage = document.getElementById("select5");
    CmbLanguage.innerHTML ="";
    LanguageList.forEach((AValue, AIndex)=>{
        var option = document.createElement("option");
        option.value = AIndex;
        option.text = AValue;
        CmbLanguage.add(option);
    });
};
function AddAllCategoriesList(){
    var AllCategories = document.getElementById("AllCategories");
    AllCategories.innerHTML ="";
    AllCategoriesList.forEach((AValue)=>{
        var liOutput =`<li><a href="#"> ${AValue} </a></li>`;
        AllCategories.innerHTML += liOutput;
    });
    
};
function AddSearchCategoryList(){
    var CmbCategory = document.getElementById("select1");
    CmbCategory.innerHTML ="";
    AllCategoriesList.forEach((AValue, AIndex)=>{
        var option = document.createElement("option");
        option.value = AIndex+1;
        option.text = AValue;
        CmbCategory.add(option);
    });
};
function ShowNavbarList(){
    var Navbar = document.getElementById("nav");
    NavbarList.forEach((AValue)=>{
        var liOutput =`<li class="nav-item"><a href="#" aria-label="Toggle navigation">${AValue}</a></li>`;
        Navbar.innerHTML += liOutput;
    });
};
function ShowShippingInfo(){    
    var ShippingInfo = document.getElementById("ShippingInfo");
    ShippingInfo.innerHTML ="";
    ShippingInfoList.forEach((AValue)=>{
        var liOutput =`<li>
                        <div class="media-icon">
                            <i class="${AValue.IconClass}"></i>
                        </div>
                        <div class="media-body">
                            <h5>${AValue.Title}</h5>
                            <span>${AValue.Description}</span>
                        </div></li>`;
        ShippingInfo.innerHTML += liOutput;
    });
    
};
function ShowInformationList(){
    var Information = document.getElementById("Information");
    InformationList.forEach((AValue)=>{
        var liOutput =`<li class="nav-item"><a href="javascript:void(0)">${AValue}</a></li>` ;
        Information.innerHTML += liOutput;
    });
};
function ShowShopDepartmentsList(){
    var ShopDepartments = document.getElementById("ShopDepartments");
    ShopDepartmentsList.forEach((AValue)=>{
        var liOutput =`<li class="nav-item"><a href="javascript:void(0)">${AValue}</a></li>` ;
        ShopDepartments.innerHTML += liOutput;
    });
};