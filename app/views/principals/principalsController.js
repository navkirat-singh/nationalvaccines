function principalsController() {
    console.log("principalsController");
    this.msg="hello";
    this.logoRoot = "static/logos/";
    this.logos = [
        {
            companyName: "Glaxo Smithkline",
            imgName: "gsk.png"
        },
        {
            companyName: "Sanofi Pasteur",
            imgName: "sanofi.jpg"
        },
        {
            companyName: "MSD",
            imgName: "msd.jpg"
        },
        {
            companyName: "Serum Institute of India",
            imgName: "serum.jpg"
        },
        {
            companyName: "Wyeth",
            imgName: "wyeth.png"
        },
        {
            companyName: "Johnson & Johnson",
            imgName: "j&j.jpg"
        },
        {
            companyName: "Novartis",
            imgName: "novartis.jpg"
        },
        {
            companyName: "Abbott",
            imgName: "abbott.jpg"
        },
        {
            companyName: "Wockhardt",
            imgName: "wockhardt.jpg"
        },
        {
            companyName: "Biological E Limited",
            imgName: "be.jpg"
        },
        {
            companyName: "Bharat Biotech",
            imgName: "bharatbiotech.png"
        },
        {
            companyName: "Biomed",
            imgName: "biomed.png"
        }
    ]
}

angular.module("myApp").controller("principalsController", [principalsController]);