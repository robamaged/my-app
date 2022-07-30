import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

export interface PeriodicElement {
   _id:string;
  isActive:Boolean;
  points: number;
  picture:string;
  age:number;
  name: string;
  gender:string;
  shop: string;
  email:string;
  phone:string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
      "_id": "62dea58436d649fb87fc5ce3",
      "isActive": false,
      "points": 1331,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Perez Mills",
      "gender": "male",
      "shop": "ZILLAR",
      "email": "perezmills@zillar.com",
      "phone": "+1 (840) 543-3716",
      "address": "627 Autumn Avenue, Sanborn, South Dakota, 9229"
  },
  {
      "_id": "62dea5841ec0fac58843a434",
      "isActive": false,
      "points": 2387,
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Copeland Patel",
      "gender": "male",
      "shop": "ZAJ",
      "email": "copelandpatel@zaj.com",
      "phone": "+1 (955) 441-3966",
      "address": "297 Gerritsen Avenue, Wattsville, Utah, 7681"
  },
  {
      "_id": "62dea5849747dc2508b753de",
      "isActive": true,
      "points": 3126,
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Nina Dillon",
      "gender": "female",
      "shop": "PROSURE",
      "email": "ninadillon@prosure.com",
      "phone": "+1 (831) 451-2174",
      "address": "665 Victor Road, Deercroft, Rhode Island, 3818"
  },
  {
      "_id": "62dea584c1486dcaf6cd69d0",
      "isActive": false,
      "points": 2115,
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Katherine Juarez",
      "gender": "female",
      "shop": "GEEKNET",
      "email": "katherinejuarez@geeknet.com",
      "phone": "+1 (927) 598-2527",
      "address": "166 Christopher Avenue, Brazos, Arizona, 3578"
  },
  {
      "_id": "62dea584c63e20e00d85667a",
      "isActive": false,
      "points": 2697,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Ila Browning",
      "gender": "female",
      "shop": "IMMUNICS",
      "email": "ilabrowning@immunics.com",
      "phone": "+1 (903) 487-2285",
      "address": "812 Visitation Place, Fresno, Tennessee, 5922"
  },
  {
      "_id": "62dea584fc688eadbf776968",
      "isActive": false,
      "points": 3925,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Fuentes Holmes",
      "gender": "male",
      "shop": "VORATAK",
      "email": "fuentesholmes@voratak.com",
      "phone": "+1 (961) 595-3410",
      "address": "432 Ditmas Avenue, Neibert, Puerto Rico, 4751"
  },
  {
      "_id": "62dea5848d011809e4d3aad5",
      "isActive": false,
      "points": 3716,
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Cain Clarke",
      "gender": "male",
      "shop": "CIPROMOX",
      "email": "cainclarke@cipromox.com",
      "phone": "+1 (977) 447-2446",
      "address": "196 Jackson Place, Ada, Kansas, 1723"
  },
  {
      "_id": "62dea584fcb5ecf62f153840",
      "isActive": true,
      "points": 2276,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Kasey Dale",
      "gender": "female",
      "shop": "AUSTEX",
      "email": "kaseydale@austex.com",
      "phone": "+1 (846) 502-3874",
      "address": "427 Georgia Avenue, Fulford, Oregon, 4049"
  },
  {
      "_id": "62dea584dcfdd30d91899d59",
      "isActive": true,
      "points": 3821,
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "Earnestine Mayer",
      "gender": "female",
      "shop": "ZYTRAC",
      "email": "earnestinemayer@zytrac.com",
      "phone": "+1 (853) 449-3307",
      "address": "105 Krier Place, Chestnut, Oklahoma, 4626"
  },
  {
      "_id": "62dea584dfe8ed4d348d114c",
      "isActive": true,
      "points": 3272,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Charlotte Skinner",
      "gender": "female",
      "shop": "TURNABOUT",
      "email": "charlotteskinner@turnabout.com",
      "phone": "+1 (879) 434-2764",
      "address": "776 Moore Street, Herbster, Palau, 4947"
  },
  {
      "_id": "62dea58497bf7c3319348150",
      "isActive": false,
      "points": 1874,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Lynne Olson",
      "gender": "female",
      "shop": "ZIDANT",
      "email": "lynneolson@zidant.com",
      "phone": "+1 (949) 509-2477",
      "address": "796 Douglass Street, Joppa, Massachusetts, 5002"
  },
  {
      "_id": "62dea584678a937a046472d4",
      "isActive": false,
      "points": 1851,
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "name": "Danielle Crosby",
      "gender": "female",
      "shop": "MAGNEATO",
      "email": "daniellecrosby@magneato.com",
      "phone": "+1 (928) 579-2004",
      "address": "660 Applegate Court, Cumberland, Delaware, 5304"
  },
  {
      "_id": "62dea58433e86c4dccaabf10",
      "isActive": true,
      "points": 1150,
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "name": "Roberson Ingram",
      "gender": "male",
      "shop": "ACUSAGE",
      "email": "robersoningram@acusage.com",
      "phone": "+1 (973) 475-2116",
      "address": "579 Irving Place, Roosevelt, Pennsylvania, 4454"
  },
  {
      "_id": "62dea584cff0330aa77d8b72",
      "isActive": true,
      "points": 3801,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Herrera Wall",
      "gender": "male",
      "shop": "ANACHO",
      "email": "herrerawall@anacho.com",
      "phone": "+1 (958) 569-2831",
      "address": "309 Bartlett Street, Stouchsburg, New Mexico, 6440"
  },
  {
      "_id": "62dea584197b61eaf5d21ffc",
      "isActive": false,
      "points": 3543,
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Hattie Grant",
      "gender": "female",
      "shop": "NETPLAX",
      "email": "hattiegrant@netplax.com",
      "phone": "+1 (899) 444-2657",
      "address": "797 Eaton Court, Winfred, Vermont, 7190"
  },
  {
      "_id": "62dea5840de807ca93ac9de8",
      "isActive": true,
      "points": 3031,
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Georgia Sargent",
      "gender": "female",
      "shop": "ACCUPRINT",
      "email": "georgiasargent@accuprint.com",
      "phone": "+1 (897) 430-2827",
      "address": "221 Bergen Place, Wakarusa, Alaska, 4900"
  },
  {
      "_id": "62dea5848f1a171949649818",
      "isActive": true,
      "points": 2058,
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Blanchard Clements",
      "gender": "male",
      "shop": "ORBAXTER",
      "email": "blanchardclements@orbaxter.com",
      "phone": "+1 (832) 541-3102",
      "address": "899 Ford Street, Castleton, Illinois, 6052"
  },
  {
      "_id": "62dea5840453a644b975850f",
      "isActive": false,
      "points": 3800,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Marissa Shaffer",
      "gender": "female",
      "shop": "GEEKOL",
      "email": "marissashaffer@geekol.com",
      "phone": "+1 (931) 592-3883",
      "address": "800 Boerum Street, Islandia, Idaho, 6617"
  },
  {
      "_id": "62dea58495f693d62c64e22d",
      "isActive": false,
      "points": 3007,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Bright Fisher",
      "gender": "male",
      "shop": "UNEEQ",
      "email": "brightfisher@uneeq.com",
      "phone": "+1 (822) 590-2128",
      "address": "725 Bliss Terrace, Bradenville, Indiana, 4770"
  },
  {
      "_id": "62dea584ac5a3b64b41c55eb",
      "isActive": true,
      "points": 1923,
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "name": "Stephanie Vasquez",
      "gender": "female",
      "shop": "FLUM",
      "email": "stephanievasquez@flum.com",
      "phone": "+1 (985) 431-2711",
      "address": "953 Mill Road, Detroit, New Hampshire, 6361"
  },
  {
      "_id": "62dea58404a7a91ae116306b",
      "isActive": true,
      "points": 3358,
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Sparks Colon",
      "gender": "male",
      "shop": "MAGNAFONE",
      "email": "sparkscolon@magnafone.com",
      "phone": "+1 (915) 495-3373",
      "address": "245 Kaufman Place, Valle, Texas, 8586"
  },
  {
      "_id": "62dea584c9828088f06539aa",
      "isActive": true,
      "points": 2030,
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "name": "Fleming Gilbert",
      "gender": "male",
      "shop": "MARKETOID",
      "email": "fleminggilbert@marketoid.com",
      "phone": "+1 (990) 600-2148",
      "address": "859 Narrows Avenue, Wilsonia, Ohio, 8291"
  },
  {
      "_id": "62dea5842e2df5b70a01badb",
      "isActive": true,
      "points": 2362,
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Allen Jones",
      "gender": "male",
      "shop": "QUINEX",
      "email": "allenjones@quinex.com",
      "phone": "+1 (956) 463-3857",
      "address": "318 Broome Street, Fillmore, Florida, 4077"
  },
  {
      "_id": "62dea584cb2d866a33156d2b",
      "isActive": true,
      "points": 2046,
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "Hensley Morgan",
      "gender": "male",
      "shop": "ENERVATE",
      "email": "hensleymorgan@enervate.com",
      "phone": "+1 (866) 545-2196",
      "address": "257 Lawrence Street, Sperryville, North Carolina, 3050"
  },
  {
      "_id": "62dea584949f3e066e065d53",
      "isActive": true,
      "points": 1560,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Olsen Albert",
      "gender": "male",
      "shop": "UXMOX",
      "email": "olsenalbert@uxmox.com",
      "phone": "+1 (903) 405-3150",
      "address": "588 Dunham Place, Carbonville, Federated States Of Micronesia, 9133"
  },
  {
      "_id": "62dea584847670e45521c0e8",
      "isActive": false,
      "points": 2719,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Willa Rivers",
      "gender": "female",
      "shop": "ZAGGLES",
      "email": "willarivers@zaggles.com",
      "phone": "+1 (881) 486-2471",
      "address": "304 Veranda Place, Elliston, Marshall Islands, 1099"
  },
  {
      "_id": "62dea584cbb6377b88d5a692",
      "isActive": false,
      "points": 1697,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Charlene Dickson",
      "gender": "female",
      "shop": "OMNIGOG",
      "email": "charlenedickson@omnigog.com",
      "phone": "+1 (812) 547-2374",
      "address": "545 Adelphi Street, Weedville, Georgia, 7533"
  },
  {
      "_id": "62dea584e1304f93e6b66bf2",
      "isActive": false,
      "points": 1943,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Araceli Ray",
      "gender": "female",
      "shop": "CUIZINE",
      "email": "araceliray@cuizine.com",
      "phone": "+1 (955) 528-3809",
      "address": "577 Grove Place, Watchtower, Maine, 9261"
  },
  {
      "_id": "62dea5843550a76b37f5e2bd",
      "isActive": false,
      "points": 1639,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Rene Ramsey",
      "gender": "female",
      "shop": "VANTAGE",
      "email": "reneramsey@vantage.com",
      "phone": "+1 (932) 439-2836",
      "address": "754 Montauk Avenue, Rosewood, Minnesota, 8297"
  },
  {
      "_id": "62dea584b78dde191009ce22",
      "isActive": false,
      "points": 2319,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Macias Leach",
      "gender": "male",
      "shop": "SURETECH",
      "email": "maciasleach@suretech.com",
      "phone": "+1 (877) 548-3478",
      "address": "843 Johnson Avenue, Crenshaw, Virgin Islands, 7424"
  },
  {
      "_id": "62dea584ad6ddf36f22b6a61",
      "isActive": false,
      "points": 1423,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Lauri Saunders",
      "gender": "female",
      "shop": "KONGENE",
      "email": "laurisaunders@kongene.com",
      "phone": "+1 (951) 540-3472",
      "address": "424 Box Street, Wikieup, Wyoming, 7200"
  },
  {
      "_id": "62dea5849a13b473dc6dbe64",
      "isActive": false,
      "points": 3234,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Page Pacheco",
      "gender": "male",
      "shop": "SURELOGIC",
      "email": "pagepacheco@surelogic.com",
      "phone": "+1 (974) 462-2464",
      "address": "441 Cedar Street, Wiscon, Montana, 2621"
  },
  {
      "_id": "62dea5841cf39231fb32dae3",
      "isActive": false,
      "points": 1376,
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "name": "Jannie Osborne",
      "gender": "female",
      "shop": "WAAB",
      "email": "jannieosborne@waab.com",
      "phone": "+1 (941) 575-2973",
      "address": "491 Abbey Court, Fontanelle, Maryland, 9228"
  },
  {
      "_id": "62dea58436783c3bd202c04f",
      "isActive": true,
      "points": 3874,
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Crawford Bonner",
      "gender": "male",
      "shop": "DENTREX",
      "email": "crawfordbonner@dentrex.com",
      "phone": "+1 (824) 445-3127",
      "address": "319 Elm Avenue, Rockingham, West Virginia, 3675"
  },
  {
      "_id": "62dea5842687ac486790df69",
      "isActive": false,
      "points": 2990,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Gilbert Luna",
      "gender": "male",
      "shop": "BIOLIVE",
      "email": "gilbertluna@biolive.com",
      "phone": "+1 (943) 545-2309",
      "address": "958 Hazel Court, Bynum, Washington, 7320"
  },
  {
      "_id": "62dea584b91fe4f71684950b",
      "isActive": false,
      "points": 1330,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Soto Osborn",
      "gender": "male",
      "shop": "LUNCHPOD",
      "email": "sotoosborn@lunchpod.com",
      "phone": "+1 (833) 454-3315",
      "address": "561 Homecrest Court, Swartzville, North Dakota, 6832"
  },
  {
      "_id": "62dea584d48bcae82cd8f941",
      "isActive": true,
      "points": 1649,
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Rasmussen Dominguez",
      "gender": "male",
      "shop": "SKYBOLD",
      "email": "rasmussendominguez@skybold.com",
      "phone": "+1 (947) 427-2025",
      "address": "234 Cyrus Avenue, Maxville, Nevada, 4061"
  },
  {
      "_id": "62dea584aff8bd9addf5b734",
      "isActive": true,
      "points": 1726,
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Stuart Larsen",
      "gender": "male",
      "shop": "CALLFLEX",
      "email": "stuartlarsen@callflex.com",
      "phone": "+1 (866) 562-2105",
      "address": "477 Buffalo Avenue, Hardyville, New York, 5613"
  },
  {
      "_id": "62dea58468c9a5673ef262ab",
      "isActive": true,
      "points": 3124,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Lawanda Cortez",
      "gender": "female",
      "shop": "COMVOY",
      "email": "lawandacortez@comvoy.com",
      "phone": "+1 (816) 404-3828",
      "address": "295 Crawford Avenue, Hebron, Hawaii, 1617"
  }
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
//  public in=[]


  displayedColumns: string[] = [ 'demo-name', 'demo-shop', 'demo-points'];
  dataSource = new  MatTableDataSource  ( ELEMENT_DATA);
   
   
  
  
onclick(row:any){
  
    // this.info=row
    

    // console.log(this.info)

    console.log(row);
}
  // applyFilter(filterValue:string){
    
  //   this.dataSource.filter= filterValue.trim().toLowerCase();
  // }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  

   constructor() {
    
}

  ngOnInit(): void {
  }

}
