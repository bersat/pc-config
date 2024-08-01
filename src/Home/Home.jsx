import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./home.css";
import "font-awesome/css/font-awesome.min.css";
import proc from "./img/gpu.png";
import materinka from "./img/meterinka.png";
import korpus from "./img/korpus.png";
import videocart from "./img/graphics-card.png";
import TDP from "./img/TDP.png";
import ram from "./img/ram.png";
import HDD from "./img/HDD.png";
import blockpit from "./img/blockpit.png";
import Corzina from "../Corzina/Corzina";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginPage from "../Validation/pages/LoginPage";
import RegisterPage from "../Validation/pages/RegisterPage";
import Raslogin from "../Validation/pages/Raslogin";
import { getAuth } from "firebase/auth";
import Glav from "../Glav/Glav";
import AboutUs from "../AboutUs/AboutUs";

const amountFormat = (amount) => {
  return Number(amount).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
};
const Home = () => {
  const [processorsdata, setProcessorsdata] = useState([
    {
      id: 1,
      name: "Процессор Intel Pentium G4400 OEM [LGA 1151, 2 x 3.3 ГГц, L2 - 0.5 МБ, L3 - 3 МБ, 2 х DDR3L, DDR4-2133 МГц, Intel HD Graphics 510, TDP 54 Вт]",
      price: 2699,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/5e6ea098feffcf790ec08ae0576dac9e/6e02b180cda7a1bdd5c44991bf79fa2a0516d6788da01e208fa454cbcefa6efd.jpg",
      socket: "LGA 1151",
      tdp: "54 Вт",
      videoYadro: "нет",
      addedToCart: false,
    },
    {
      id: 2,
      name: "Процессор Intel Core i3-10105F OEM [LGA 1200, 4 x 3.7 ГГц, L2 - 1 МБ, L3 - 6 МБ, 2 х DDR4-2666 МГц, TDP 65 Вт]",
      price: 6099,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/93f77a9b768bcfe02334387482d097d5/116e73208fbbee3ace33505f672d014208671cbdb699271f28ce2c0eeeb9857a.jpg",
      socket: "LGA 1200",
      tdp: "65 Вт",
      videoYadro: "нет",
      addedToCart: false,
    },
    {
      id: 3,
      name: "Процессор AMD Ryzen 5 3400GE OEM [AM4, 4 x 3.3 ГГц, L2 - 2 МБ, L3 - 4 МБ, 2 х DDR4-2933 МГц, AMD Radeon Vega 11, TDP 35 Вт]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/2541963e27c52d338ddd029a37459d33/024c12d480ee73c10e0e398c10916c33bc0f79155aa36c79ba6cd68f4bbedb64.jpg",
      price: 10999,
      socket: "AM4",
      tdp: "35 Вт",
      videoYadro: "нет",
      addedToCart: false,
    },
    {
      id: 4,
      name: "Процессор Intel Core i5-11400 OEM [LGA 1200, 6 x 2.6 ГГц, L2 - 3 МБ, L3 - 12 МБ, 2 х DDR4-3200 МГц, Intel UHD Graphics 730, TDP 65 Вт]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/8abe8130e683ff4f3d694688d915f57f/481a3463e5c0ad94d46f60cba1109ab37755604d77c26e9cf0c08697f6be6dcc.jpg",
      price: 13999,
      socket: "LGA 1200",
      tdp: " 65 Вт",
      videoYadro: "нет",
      addedToCart: false,
    },
  ]);

  const [motherboardsdata, setMotherboardsdata] = useState([
    {
      id: 5,
      name: "Материнская плата ASRock H310CM-HDV/M.2 SE [LGA 1151, Intel Q270, 2xDDR4-2666 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]",
      price: 5499,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/95d69703f12b53a990ed475fecdd5deb/7eca21bc8d8c9f6a73ba1d594e899a45c4d8b762db7940565bd31fae7ed0f2cc.jpg",
      socket: "LGA 1151",
      formfactorplat: "MicroATX",
      tipozu: "DDR4",
      tipnakopit1: "HDD",
      tipnakopit2: "M.2",
      tipnakopit3: "SSD",
      addedToCart: false,
    },
    {
      id: 6,
      name: "Материнская плата ASRock H510M-HDV/M.2 SE [LGA 1200, Intel H470, 2xDDR4-3200 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]",
      price: 6199,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/b525ed05e4f84e4b93e41c56637ea082/fe6b5e7bd55fb942798c60ef6bf10e519ec198830319b1027bf64585938cb0b4.jpg",
      socket: "LGA 1200",
      formfactorplat: "MicroATX",
      tipozu: "DDR4",
      tipnakopit1: "HDD",
      tipnakopit2: "M.2",
      tipnakopit3: "SSD",
      addedToCart: false,
    },
    {
      id: 7,
      name: "Материнская плата MSI B450M-A PRO MAX II [AM4, AMD B450, 2xDDR4-2667 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX]",
      price: 7299,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/0755a7bfe58eecf4a92f67c5df16d1cd/c2b21c7429c84d9e0dc6f0b5c8ab366cd35ba3ab71ee774fd66303bdb9ff51e0.jpg",
      socket: "AM4",
      formfactorplat: "MicroATX",
      tipozu: "DDR4",
      tipnakopit1: "HDD",
      tipnakopit2: "M.2",
      tipnakopit3: "SSD",
      addedToCart: false,
    },
    {
      id: 8,
      name: "Материнская плата GIGABYTE B560M H [LGA 1200, Intel B560, 2xDDR4-3200 МГц, 1xPCI-Ex16, 2xM.2, Mini-Tower]",
      price: 8899,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/05e4965b148a67ccd224fdc8024f6c4f/83457f7633f195c3b21c716fd13fac2e872b8efe84f01ed9ebf3c1d050437e0a.jpg",
      socket: "LGA 1200",
      formfactorplat: "MiniTower",
      tipozu: "DDR4",
      tipnakopit1: "HDD",
      tipnakopit2: "M.2",
      tipnakopit3: "SSD",
      addedToCart: false,
    },
  ]);

  const [korpusdata, setKorpusdata] = useState([
    {
      id: 9,
      name: "Корпус DEXP DCV-200W белый [Mini-Tower, Micro-ATX, USB 2.0 Type-A, USB 3.2 Gen1 Type-A]",
      price: 1699,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/e55a73d01385801c09f3bf1beaf2e74d/b2124d98544d0e87d2a8bff5827b2797af4aabfd30933a3b97386a1c3a7f3c88.jpg",
      formfactorplat: "MicroATX",
      dlinavideocart: "12",
      visotbashni: "129мм",
      razmerblockapit: "376мм",
      addedToCart: false,
    },
    {
      id: 10,
      name: "Корпус DEXP AWS-DE7 черный [Mid-Tower, Flex-ATX, Micro-ATX, Standard-ATX, USB 2.0 Type-A, USB 3.2 Gen1 Type-A]",
      price: 2050,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/6aba921e1a878c461f3a8026d53fc4db/ef4d72613937a8cf76e7fc77fe620f785c63dcca59aee3747e2837e878baafa8.jpg",
      formfactorplat: "MicroATX",
      dlinavideocart: "123",
      visotbashni: "131мм",
      razmerblockapit: "376мм",
      addedToCart: false,
    },
    {
      id: 11,
      name: "Корпус ExeGate MA-373X [EX283240RUS] черный [Mini-Tower, Micro-ATX, Mini-ITX, USB 2.0 Type-A]",
      price: 2550,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/cf8d13098b142ed2ea33019096993516/728836075a916d3a041eee4e88fe04cf40f72a770e2c19de33eb34db8dfad14b.jpg",
      formfactorplat: "MiniTower",
      dlinavideocart: "543",
      visotbashni: "136мм",
      razmerblockapit: "350мм",
      addedToCart: false,
    },
  ]);

  const [videocartdata, setVidoecartadata] = useState([
    {
      id: 12,
      name: "Видеокарта MSI AMD Radeon RX 6500 XT MECH 2X OC [RX 6500 XT MECH 2X 4G OC] [PCI-E 4.0 4 ГБ GDDR6, 64 бит, DisplayPort, HDMI, GPU 2310 МГц]",
      price: 20699,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/01647bc6904416f76c2be0f6e1f38993/5a19e2d1c39272077e85e0899d98bb2c8e551b99d286721a3a11c73a9f0ffb5e.jpg",
      dlinavideocart: "12",
      wat: "650w",
      addedToCart: false,
    },
    {
      id: 13,
      name: "Видеокарта MSI GeForce RTX 3050 VENTUS 2X OC [912-V812-016] [PCI-E 4.0 6 ГБ GDDR6, 96 бит, 2 x HDMI, DisplayPort, GPU 1042 МГц]",
      price: 21999,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/9d44308c72fdce3842645057a035f875/ba7470e488d21de557507445fafcd9388c6fe1521704b0226f521773ea66b854.jpg",
      dlinavideocart: "123",
      wat: "700w",
      addedToCart: false,
    },
    {
      id: 14,
      name: "Видеокарта MSI GeForce RTX 3050 VENTUS 2X XS OC [RTX 3050 VENTUS 2X XS 8G OC] [PCI-E 4.0 8 ГБ GDDR6, 128 бит, DisplayPort, DVI-D, HDMI, GPU 1552 МГц]",
      price: 27999,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/4f06b2ca446d5a27c671bee4d9c5a0b8/3a6a710235a7d28bf6ca67ad60cfac5d9fc724bb1e3d368b5d22a6294684f83e.jpg",
      dlinavideocart: "543",
      wat: "700w",
      addedToCart: false,
    },
  ]);

  const [ohladdata, setOhladdata] = useState([
    {
      id: 15,
      name: "Кулер для процессора ID-COOLING SE-903-SD V3 [основание - алюминий/медь, 2000 об/мин, 23.1 дБ, 3 pin, 130 Вт]",
      price: 1099,
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/a130d5eca197a4a082b179a7d1562e6f/fe2d368f2c335588de65821ba9a8ee056c3c10f28aac68197172c42823edf7db.jpg",
      socket: "LGA 1200",
      tdp: "54 Вт",
      visotbashni: "123мм",
      addedToCart: false,
    },
    {
      id: 16,
      name: "Кулер для процессора ID-COOLING SE-914-XT ARGB V2 [LGA1700] [SE-914-XT ARGB] [основание - алюминий/медь, 2200 об/мин, 25.8 дБ, 4 pin, подсветка, 150 Вт]",
      price: 3499,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/37e6cecc7a2bbe29c70142fc45cf4b64/6605a9dfefc4f5dbc92fd5eaac1eba6f2245d424cb0d0386c0d1a55463965dac.jpg",
      socket: "LGA 1156",
      tdp: "65 Вт",
      visotbashni: "131мм",
      addedToCart: false,
    },
    {
      id: 17,
      name: "Кулер для процессора Cooler Master Hyper H410R RGB [RR-H410-20PC-R1] [основание - алюминий/медь, 2000 об/мин, 29 дБ, 4 pin, подсветка, 100 Вт]",
      price: 3999,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/315cf8cb41f2598627500778a7b7f4b3/011fa6f7b16e21d494e05a3f40a4dcc866817637c6c97c1513daa8152b51328a.jpg",
      socket: "LGA 1200",
      tdp: "65 Вт",
      visotbashni: "136мм",
      addedToCart: false,
    },
    {
      id: 18,
      name: "Кулер для процессора DEEPCOOL AG300 WHITE ARGB [основание - алюминий/едь, 3050 об/мин, 30.5 дБ, 4 pin, 150 Вт]",
      price: 2799,
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/8b44dc5baa828121c3a7be78ba207e67/0790a80b32231a748464f400cd5ead4a3961bc3594dc8ce81c34c3666d3f3971.jpg",
      socket: "AM4",
      tdp: "35 Вт",
      visotbashni: "129мм",
      addedToCart: false,
    },
  ]);

  const [operativkadata, setOperativadata] = useState([
    {
      id: 19,
      name: "Оперативная память Patriot Viper Elite II [PVE244G266C6] 4 ГБ [DDR4, 4 ГБx1 шт, 2666 МГц, 16-17-17-36]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/bb185ca647c42779234e8ad32863644e/6534fc1b3689bd4924ce49690057d12690cdeedfb0d67fd6ea8d65b642333b6d.jpg",
      price: 1699,
      tipozu: "DDR4",
      addedToCart: false,
    },
    {
      id: 20,
      name: "Оперативная память ADATA XPG GAMMIX D10 [AX4U32008G16A-SB10] 8 ГБ [DDR4, 8 ГБx1 шт, 3200 МГц, 16-20-20]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/b84e1b6bb52cb53f7a1778c63423006a/e98b93cc3da1b2b2965e65f61600f9ed3d26e9f1509b098c8675dd53c356e855.jpg",
      price: 2050,
      tipozu: "DDR4",
      addedToCart: false,
    },
    {
      id: 21,
      name: "Оперативная память ADATA XPG Lancer [AX5U6000C3016G-CLAWH] 16 ГБ [DDR5, 16 ГБx1 шт, 6000 МГц, 30-40-40]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/6081a2e914f6b20bca6e5ac45182d798/c6fbda75bf5bfcc21f2d58166017855a365ae1656cd25b3bbd7921272abed425.jpg",
      price: 6599,
      tipozu: "DDR5",
      addedToCart: false,
    },
    {
      id: 22,
      name: "Оперативная память Kingston FURY Renegade [KF432C16RB2/8] 8 ГБ [DDR4, 8 ГБx1 шт, 3200 МГц, 16-18-18]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/30d35ef9a09867717feba82f9e66681a/10852573196c38ccf361d222aab9154ffcda10feb99a05bc26cd15276639e8c7.jpg",
      price: 2499,
      tipozu: "DDR4",
      addedToCart: false,
    },
    {
      id: 23,
      name: "Оперативная память Kingston Fury Beast Black AMD [KF556C36BBE-8] 8 ГБ [DDR5, 8 ГБx1 шт, 5600 МГц, 36-38-38]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/e720c43cf775688076cddf4f04433f67/6f61e0ef09130ad6b29d329413d2c33683fadab6f93856060823f55ffa885c14.jpg",
      price: 4599,
      tipozu: "DDR5",
      addedToCart: false,
    },
  ]);

  const [nakopitelidata, setNakopitelidata] = useState([
    {
      id: 24,
      name: "1 ТБ Жесткий диск Toshiba P300 [HDWD110UZSVA] [SATA III, 6 Гбит/с, 7200 об/мин, кэш память - 64 МБ]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/e1be612723c1ba0b5c1e8f1839b620a0/678c0769d3ab2fb18b455909615baf7b1ad08554195eabdbe21570351fe6b8d2.jpg",
      price: 5599,
      tipnakopit1: "HDD",
      tipnakopit: "HDD",
      nakopit: "1",
      addedToCart: false,
    },
    {
      id: 25,
      name: "500 ГБ SSD M.2 накопитель MSI SPATIUM M450 [S78-440K220-P83] [PCI-E 4.0 x4, чтение - 3600 Мбайт/сек, запись - 2300 Мбайт/сек, 3 бит TLC, NVM Express]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/b69625aba4ea17dd5522443b67baa6d7/783244261f9056a154b22ff0d49bb1b932bfb34f8694fb1d8c7d672c3faa9eef.jpg",
      price: 4999,
      tipnakopit2: "M.2",
      tipnakopit: "M.2",
      nakopit: "2",
      addedToCart: false,
    },
    {
      id: 26,
      name: '120 ГБ 2.5" SATA накопитель HP S700 [2DP97AA#ABB] [SATA, чтение - 550 Мбайт/сек, запись - 480 Мбайт/сек, 3D NAND 3 бит TLC]',
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/a2245cf31d5b7e094588ba3073f0c4a2/3918954710bcdfc8948837eb357231e60cfbe52444a3274ed9c1b3d897d853ff.jpg",
      price: 1599,
      tipnakopit3: "SSD",
      tipnakopit: "SSD",
      nakopit: "3",
      addedToCart: false,
    },
    {
      id: 27,
      name: "1024 ГБ SSD M.2 накопитель HP FX900 plus [7F617AA#AAB] [PCI-E 4.0 x4, чтение - 7100 Мбайт/сек, запись - 6300 Мбайт/сек, 3 бит TLC, NVM Express]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/8a8f652ec43a9d8c9eb96928e57d7ad6/5c5f5bce44678c0d161c546364195dee528e0fdcc1e6ed1d78e5913258e41d6d.jpg",
      price: 8299,
      tipnakopit2: "M.2",
      tipnakopit: "M.2",
      nakopit: "4",
      addedToCart: false,
    },
    {
      id: 28,
      name: '256 ГБ 2.5" SATA накопитель DEXP C100 [C100SMYM256] [SATA, чтение - 550 Мбайт/сек, запись - 495 Мбайт/сек, 3D NAND 3 бит TLC]',
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/edbec195a601f0e312a74ee9c1519313/7c4a20a5dadf5455c1861ed9529f8daecc9340a18eb1e29cb1ceb9339e395d75.jpg",
      price: 1999,
      tipnakopit3: "SSD",
      tipnakopit: "SSD",
      nakopit: "5",
      addedToCart: false,
    },
    {
      id: 29,
      name: "2 ТБ Жесткий диск Seagate BarraCuda [ST2000DM005] [SATA III, 6 Гбит/с, 5400 об/мин, кэш память - 256 МБ]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/f25f7641f0b44ba6862a7eabfdca8965/64e70250342a126e5f4df4d836834c1a76cb577796178224084e4ffcb1166dec.jpg",
      price: 5899,
      tipnakopit1: "HDD",
      tipnakopit: "HDD",
      nakopit: "6",
      addedToCart: false,
    },
    {
      id: 30,
      name: "1 ТБ Жесткий диск WD Blue [WD10EZEX] [SATA III, 6 Гбит/с, 7200 об/мин, кэш память - 64 МБ]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/114de001b2be33262da820c5a6372599/531e1e880acf7fac191e35a5d616bb6b920d77fa31e8929909b1d7c5985e3b58.jpg",
      price: 6299,
      tipnakopit1: "HDD",
      tipnakopit: "HHD",
      nakopit: "7",
      addedToCart: false,
    },
  ]);

  const [blockpitdata, setBlockpitdata] = useState([
    {
      id: 31,
      name: "Блок питания AeroCool VX PLUS 650W [VX-650 PLUS] [650 Вт, 20 + 4 pin, 4+4 pin CPU, 4 SATA, 6+2 pin x2 PCI-E]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/d6067925c4dd27f92eca2313b894850b/5ebc608769bf0a4420e6cf61e5982a70cc62302f4ddee1638923926a718c2ce1.jpg",
      price: 3999,
      razmerblockapit: "376мм",
      wat: "650w",
      addedToCart: false,
    },
    {
      id: 32,
      name: "Блок питания AeroCool VX PLUS 700W [VX-700 PLUS] [700 Вт, APFC, 20 + 4 pin, 4+4 pin CPU, 6 SATA, 6+2 pin x2 PCI-E]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/cd0c668d42d0e791b221c72cd7d7cafd/51cab3b2fe3d7788b9f37b13a3a2ffde82f430001e222b120504e7615adf7240.jpg",
      price: 4199,
      razmerblockapit: "376мм",
      wat: "700w",
      addedToCart: false,
    },
    {
      id: 33,
      name: "Блок питания DEEPCOOL PF700 [R-PF700D-HA0B-EU] [700 Вт, 80+, APFC, 20 + 4 pin, 4+4 pin x2 CPU, 6 SATA, 6+2 pin x4 PCI-E]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/d45c914d3fa20068a4faaa72a43488c0/45d478a219aebff6d9e5630305e9c956379b4bfba2fd699c61ba7efadbbfdadd.jpg",
      price: 5599,
      razmerblockapit: "376мм",
      wat: "700w",
      addedToCart: false,
    },
    {
      id: 34,
      name: "Блок питания AeroCool VX PLUS 600 RGB [VX-600 PLUS RGB] [600 Вт, 20 + 4 pin, 4+4 pin CPU, 4 SATA, 6+2 pin x2 PCI-E]",
      image:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/ba7f7df321eaa69ec6b28f33b6f63ef7/52100bdb80111baa9c52f00e5da859e7dfbff43699fd19ec6f3ad20ebb2c4497.jpg",
      price: 3599,
      razmerblockapit: "370мм",
      wat: "600w",
      addedToCart: false,
    },
    {
      id: 35,
      name: "Блок питания DEEPCOOL PN750D [R-PN750D-FC0B-EU] [750 Вт, 80+ Gold, APFC, 20 + 4 pin, 4+4 pin x2 CPU, 8 SATA, 6+2 pin x3 PCI-E]",
      image:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/f89232187f6a85da34b030599bbe912f/b4f6ae295b692eaa16dbd78883f3583d9b3fe7870b67476af66a225034d5c365.jpg",
      price: 8699,
      razmerblockapit: "380мм",
      wat: "750w",
      addedToCart: false,
    },
  ]);

  const ProgressBar = ({ progress }) => {
    return (
      <div className="progress-bar-container">
        <div
          className="progbar"
          style={{ width: "1000px", marginLeft: "330px" }}
        >
          <div
            className="progress-bar"
            style={{ minWidth: "70px", width: `${progress}%` }}
          >
            <div></div>
            <div className="progress-text">{`${progress}%`}</div>
          </div>
        </div>

        <div
          style={{ marginLeft: "270px", width: "100px", marginTop: "-44px" }}
        >
          <button
            style={{ fontSize: "15px" }}
            className="btnsbros"
            onClick={handleCheckClick}
          >
            Проверить совместимость
          </button>
        </div>
      </div>
    );
  };

  const Processor = ({ processor, onProcessorSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onProcessorSelect(processor.socket, processor.tdp, processor.name);
    };

    const handleAddToCart = () => {
      if (!processor.addedToCart) {
        onAddToCart(processor);
        const updatedData = processorsdata.map((proc) =>
          proc.id === processor.id ? { ...proc, addedToCart: true } : proc
        );
        setProcessorsdata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };

    return (
      <div className="component">
        <h3 className="h3complect">{processor.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={processor.image}
          alt={processor.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(processor.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
              disabled={processor.addedToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onMouseDown={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Motherboard = ({ onAddToCart, motherboard, onMotherboardSelect }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
      if (!motherboard.addedToCart) {
        onAddToCart(motherboard);
        const updatedData = motherboardsdata.map((mobo) =>
          mobo.id === motherboard.id ? { ...mobo, addedToCart: true } : mobo
        );
        setMotherboardsdata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onMotherboardSelect(
        motherboard.socket,
        motherboard.formfactorplat,
        motherboard.tipozu,
        motherboard.name
      );
    };

    return (
      <div className="component">
        <h3 className="h3complect">{motherboard.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={motherboard.image}
          alt={motherboard.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(motherboard.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
              disabled={motherboard.addedToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button
              className="btncomplectuyushie"
              onMouseDown={handleAddClick}
              disabled={motherboard.addedToCart}
            >
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Korpus = ({ korpus, onKorpusSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onKorpusSelect(
        korpus.formfactorplat,
        korpus.dlinavideocart,
        korpus.visotbashni,
        korpus.razmerblockapit,
        korpus.name
      );
    };

    const handleAddToCart = () => {
      if (!korpus.addedToCart) {
        onAddToCart(korpus);
        const updatedData = korpusdata.map((kor) =>
          kor.id === kor.id ? { ...kor, addedToCart: true } : kor
        );
        setKorpusdata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{korpus.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={korpus.image}
          alt={korpus.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(korpus.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Videocart = ({ videocart, onVideoCartSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onVideoCartSelect(
        videocart.dlinavideocart,
        videocart.wat,
        videocart.name
      );
    };

    const handleAddToCart = () => {
      if (!videocart.addedToCart) {
        onAddToCart(videocart);
        const updatedData = videocartdata.map((video) =>
          video.id === video.id ? { ...video, addedToCart: true } : video
        );
        setVidoecartadata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{videocart.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={videocart.image}
          alt={videocart.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(videocart.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Ohlad = ({ ohlad, onOhladSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onOhladSelect(ohlad.name, ohlad.tdp, ohlad.socket, ohlad.visotbashni);
    };

    const handleAddToCart = () => {
      if (!ohlad.addedToCart) {
        onAddToCart(ohlad);
        const updatedData = ohladdata.map((ohlad) =>
          ohlad.id === ohlad.id ? { ...ohlad, addedToCart: true } : ohlad
        );
        setOhladdata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{ohlad.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={ohlad.image}
          alt={ohlad.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(ohlad.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Operativa = ({ operativa, onOperativaSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onOperativaSelect(operativa.tipozu, operativa.name);
    };

    const handleAddToCart = () => {
      if (!operativa.addedToCart) {
        onAddToCart(operativa);
        const updatedData = operativkadata.map((oper) =>
          oper.id === operativa.id ? { ...oper, addedToCart: true } : oper
        );
        setOperativadata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{operativa.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={operativa.image}
          alt={operativa.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(operativa.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Nakopiteli = ({ nakopiteli, onNakopitSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onNakopitSelect(nakopiteli.name);
    };

    const handleAddToCart = () => {
      if (!nakopiteli.addedToCart) {
        onAddToCart(nakopiteli);
        const updatedData = nakopitelidata.map((nakop) =>
          nakop.id === nakopiteli.id ? { ...nakop, addedToCart: true } : nakop
        );
        setNakopitelidata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{nakopiteli.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={nakopiteli.image}
          alt={nakopiteli.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(nakopiteli.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Blockpit = ({ blockpit, onBlockpitSelect, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
      setIsAdded(!isAdded);
      onBlockpitSelect(blockpit.razmerblockapit, blockpit.wat, blockpit.name);
    };

    const handleAddToCart = () => {
      if (!blockpit.addedToCart) {
        onAddToCart(blockpit);
        const updatedData = blockpitdata.map((block) =>
          block.id === blockpit.id ? { ...block, addedToCart: true } : block
        );
        setBlockpitdata(updatedData);
        console.log("Товар добавлен в корзину");
      } else {
        console.log("Товар уже добавлен в корзину");
      }
    };
    return (
      <div className="component">
        <h3 className="h3complect">{blockpit.name}</h3>
        <img
          style={{ width: "200px", height: "200px" }}
          src={blockpit.image}
          alt={blockpit.name}
        />
        <div className="blockpriceandbtn">
          <p className="priceconfig">{amountFormat(blockpit.price)}</p>
          <div>
            <button
              className="btnheart"
              style={{
                backgroundColor: "rgb(238, 236, 236)",
                border: "none",
                padding: "10px",
                borderRadius: "15px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            >
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="fa-solid fa-cart-shopping  heart"
              ></i>
            </button>
            <button className="btncomplectuyushie" onClick={handleAddClick}>
              {isAdded ? "добавлено" : "добавить"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  //функция для сброса фильтрации
  const handleButtonClick = () => {
    setSelectedProcessorSocket(null);
    setSelectedMotherboardSocket(null);
    setSelectedMotherboardFormFactor(null);
    setSelectedVideocartaDlina(null);
    setSelectedOhlad(null);
    setSelectedOperativa(null);
    setSelectedBlockpit(null);
    setSelectedItemsCount(0);
    setProcessorSelected(false);
    setMotherboardSelected(false);
    setCorpusSelected(false);
    setVideocartaSelected(false);
    setOhladSelected(false);

    setNakopiteliSelected(false);
    setBlockpitSelected(false);
    setSelectedItems(null);
    setM2SelectedCount(0);
    setHDDSelectedCount(0);
    setSSDSelectedCount(0);

    setSelectedOperativaCounts(0);
    setSelectedOperativaNames("");
    setOperativaSelected(false);

    setSelectedProcessorName("");
    setSelectedMotherboardName("");
    setSelectedKorpusName("");
    setSelectedVideocartName("");
    setSelectedOhladName("");
    setSelectedOperativaName("");
    setSelectedNakopitName("");
    setSelectedBlockpitName("");

    setFilteredKorpus(korpusdata);
    setFilteredProcessors(processorsdata);
    setFilteredMotherboards(motherboardsdata);
    setFilteredVideocarta(videocartdata);
    setFilteredOhlad(ohladdata);
    setFilteredOperativa(operativkadata);
    setFilteredNakopiteli(nakopitelidata);
    setFilteredBlockpit(blockpitdata);
  };

  const [selectedProcessorSocket, setSelectedProcessorSocket] = useState(null);
  const [selectedMotherboardSocket, setSelectedMotherboardSocket] =
    useState(null);
  const [selectedMotherboardFormFactor, setSelectedMotherboardFormFactor] =
    useState(null);
  const [selectedVideocartaDlina, setSelectedVideocartaDlina] = useState(null);
  const [selectedOhlad, setSelectedOhlad] = useState(null);
  const [selectedOperativa, setSelectedOperativa] = useState(null);
  const [selectedBlockpit, setSelectedBlockpit] = useState(null);
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);
  const [processorSelected, setProcessorSelected] = useState(false);
  const [motherboardSelected, setMotherboardSelected] = useState(false);
  const [corpusSelected, setCorpusSelected] = useState(false);
  const [videocartaSelected, setVideocartaSelected] = useState(false);
  const [ohladSelected, setOhladSelected] = useState(false);
  const [operativaSelected, setOperativaSelected] = useState(false);
  const [nakopiteliSelected, setNakopiteliSelected] = useState(false);
  const [blockpitSelected, setBlockpitSelected] = useState(false);

  const [selectedProcessorName, setSelectedProcessorName] = useState("");
  const [selectedMotherboardName, setSelectedMotherboardName] = useState("");
  const [selectedKorpusName, setSelectedKorpusName] = useState("");
  const [selectedVideocartName, setSelectedVideocartName] = useState("");
  const [selectedOhladName, setSelectedOhladName] = useState("");
  const [selectedOperativaName, setSelectedOperativaName] = useState("");
  const [selectedNakopitName, setSelectedNakopitName] = useState("");
  const [selectedBlockpitName, setSelectedBlockpitName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [filteredKorpus, setFilteredKorpus] = useState(korpusdata);
  const [filteredProcessors, setFilteredProcessors] = useState(processorsdata);
  const [filteredMotherboards, setFilteredMotherboards] =
    useState(motherboardsdata);
  const [filteredVideocarta, setFilteredVideocarta] = useState(videocartdata);
  const [filteredOhlad, setFilteredOhlad] = useState(ohladdata);
  const [filteredOperativa, setFilteredOperativa] = useState(operativkadata);
  const [filteredNakopiteli, setFilteredNakopiteli] = useState(nakopitelidata);
  const [filteredBlockpit, setFilteredBlockpit] = useState(blockpitdata);

  const handleProcessorSelect = (socket, tdp, name) => {
    if (!processorSelected) {
      setProcessorSelected(true);
      setFilteredOhlad(tdp);
      setSelectedProcessorName(name);
      setSelectedProcessorSocket(socket);
      setSelectedMotherboardSocket(null);
      setSelectedMotherboardFormFactor(null); // Сбросить выбранный корпус и форм-фактор при выборе процессора
      setSelectedVideocartaDlina(null);
      setSelectedBlockpit(null);
      setFilteredMotherboards(
        motherboardsdata.filter((motherboard) => motherboard.socket === socket)
      );
      setFilteredOhlad(ohladdata.filter((ohlad) => ohlad.tdp === tdp));
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const handleMotherboardSelect = (socket, formfactorplat, tipozu, name) => {
    if (!motherboardSelected) {
      setMotherboardSelected(true);
      setSelectedOperativa(tipozu);
      setSelectedMotherboardName(name);
      setSelectedMotherboardSocket(socket);
      setSelectedOhlad(socket);
      setSelectedProcessorSocket(null);
      setSelectedBlockpit(null);
      setSelectedVideocartaDlina(null);
      setSelectedMotherboardFormFactor(formfactorplat); // Установить форм-фактор выбранной материнской платы
      setFilteredKorpus(
        korpusdata.filter((korpus) => korpus.formfactorplat === formfactorplat)
      );
      setFilteredProcessors(
        processorsdata.filter((proc) => proc.socket === socket)
      );
      setFilteredOhlad(ohladdata.filter((ohlad) => ohlad.socket === socket));
      setFilteredOperativa(
        operativkadata.filter((operativa) => operativa.tipozu === tipozu)
      );
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const handleKorpusSelect = (
    formfactorplat,
    dlinavideocart,
    visotbashni,
    razmerblockapit,
    name
  ) => {
    if (!corpusSelected) {
      setCorpusSelected(true);
      setSelectedBlockpit(razmerblockapit);
      setSelectedKorpusName(name);
      setSelectedVideocartaDlina(dlinavideocart);
      setSelectedOhlad(visotbashni);
      setSelectedMotherboardFormFactor(null);
      setSelectedProcessorSocket(null);
      setSelectedMotherboardFormFactor(formfactorplat);
      setFilteredMotherboards(
        motherboardsdata.filter(
          (motherboard) => motherboard.formfactorplat === formfactorplat
        )
      );
      setFilteredVideocarta(
        videocartdata.filter(
          (videocart) => videocart.dlinavideocart === dlinavideocart
        )
      );
      setFilteredOhlad(
        ohladdata.filter((ohlad) => ohlad.visotbashni === visotbashni)
      );
      setFilteredBlockpit(
        blockpitdata.filter(
          (blockpit) => blockpit.razmerblockapit === razmerblockapit
        )
      );
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const handleVideoCartSelect = (dlinavideocart, wat, name) => {
    if (!videocartaSelected) {
      setVideocartaSelected(true);
      setSelectedOperativa(null);
      setSelectedVideocartName(name);
      setSelectedMotherboardSocket(null);
      setSelectedProcessorSocket(null);
      setSelectedBlockpit(wat);
      setSelectedVideocartaDlina(dlinavideocart);
      setFilteredKorpus(
        korpusdata.filter((korpus) => korpus.dlinavideocart === dlinavideocart)
      );
      setFilteredBlockpit(
        blockpitdata.filter((blockpit) => blockpit.wat === wat)
      );
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const handleOhladSelect = (name) => {
    if (!ohladSelected) {
      setOhladSelected(true);
      setSelectedOhladName(name);
      setSelectedMotherboardFormFactor(null);
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const [selectedOperativaNames, setSelectedOperativaNames] = useState([]);
  const [selectedOperativaCounts, setSelectedOperativaCounts] = useState({});

  const handleOperativaSelect = (tipozu, name) => {
    // Проверяем, выбрана ли уже оперативная память
    const alreadySelected = selectedOperativaNames.includes(name);

    // Проверяем, сколько раз выбрана оперативная память с данным именем
    const selectedCount = selectedOperativaCounts[name] || 0;

    // Если уже выбрана оперативная память, блокируем возможность выбора другой
    if (alreadySelected && selectedCount >= 2) {
      return;
    }

    // Если выбрана одна оперативная память, блокируем выбор другой
    if (selectedOperativaNames.length > 0 && !alreadySelected) {
      return;
    }

    // Обновляем состояние выбранной оперативной памяти и ее счетчика
    setSelectedOperativaNames([...selectedOperativaNames, name]);
    setSelectedOperativaCounts({
      ...selectedOperativaCounts,
      [name]: selectedCount + 1,
    });

    // Если оперативная память еще не выбрана, обновляем другие состояния
    if (!operativaSelected) {
      setOperativaSelected(true);
      setSelectedMotherboardSocket(tipozu);
      setSelectedBlockpit(null);
      setSelectedOhlad(null);
      setFilteredMotherboards(
        motherboardsdata.filter((motherboard) => motherboard.tipozu === tipozu)
      );
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const handleBlockpitSelect = (wat, razmerblockapit, name) => {
    if (!blockpitSelected) {
      setBlockpitSelected(true);
      setSelectedVideocartaDlina(wat);
      setSelectedBlockpitName(name);
      setSelectedVideocartaDlina(razmerblockapit);
      setSelectedOhlad(null);
      setSelectedItemsCount(selectedItemsCount + 1);
    }
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [m2SelectedCount, setM2SelectedCount] = useState(0);
  const [hddSelectedCount, setHDDSelectedCount] = useState(0);
  const [ssdSelectedCount, setSSDSelectedCount] = useState(0);

  const handleNakopitSelect = (id) => {
    if (!nakopiteliSelected) {
      setNakopiteliSelected(true);
      setSelectedItemsCount(selectedItemsCount + 1);
    }
    // Находим выбранный накопитель по его id
    const selectedItem = nakopitelidata.find((item) => item.id === id);

    // Проверяем, найден ли накопитель
    if (selectedItem) {
      // Обработка типов накопителей
      switch (selectedItem.tipnakopit) {
        case "M.2":
          if (m2SelectedCount < 1) {
            setM2SelectedCount((prevCount) => prevCount + 1);
            setSelectedNakopitName((prevState) => ({
              ...prevState,
              [selectedItem.name]: (prevState[selectedItem.name] || 0) + 1,
            }));
          } else {
            console.log("Можно выбрать только один M.2 накопитель");
          }
          break;
        case "HDD":
          if (hddSelectedCount < 2) {
            setHDDSelectedCount((prevCount) => prevCount + 1);
            setSelectedNakopitName((prevState) => ({
              ...prevState,
              [selectedItem.name]: (prevState[selectedItem.name] || 0) + 1,
            }));
          } else {
            console.log("Можно выбрать только два HDD накопителя");
          }
          break;
        case "SSD":
          if (ssdSelectedCount < 1) {
            setSSDSelectedCount((prevCount) => prevCount + 1);
            setSelectedNakopitName((prevState) => ({
              ...prevState,
              [selectedItem.name]: (prevState[selectedItem.name] || 0) + 1,
            }));
          } else {
            console.log("Можно выбрать только один SSD накопитель");
          }
          break;
        default:
          console.log("Неизвестный тип накопителя:", selectedItem.tipnakopit);
      }
    } else {
      console.log("Накопитель не найден");
    }
  };

  const handleCheckClick = () => {
    if (selectedItemsCount < 8) {
      alert(
        "Ошибка: Вы выбрали не все товары необходимые для полной хорошей сборки"
      );
    } else {
      alert("Сборка собрана, всё хорошо ✔");
    }
  };

  const handleAddToCart = (item) => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Проверка авторизации пользователя
    if (!user) {
      alert(
        "Пользователь не авторизован. Необходимо авторизоваться, чтобы добавить товар в корзину."
      );
      return;
    }

    // Проверка наличия товара в корзине
    const itemExists = cartItems.some((i) => i.id === item.id);
    if (itemExists) {
      alert("Товар уже добавлен в корзину");
      return;
    }

    // Если пользователь авторизован и товара нет в корзине, добавляем товар
    const updatedItems = [...cartItems, item];
    setCartItems(updatedItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
    alert("Товар добавлен в корзину");
  };

  const getTotalPrice = () => {
    return totalPrice;
  };

  const clearCart = () => {
    // Установить корзину в пустой массив
    setCartItems([]);
  };

  const removeFromCart = (index) => {
    // Удалить товар из корзины по индексу
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const progress = (selectedItemsCount / 8) * 100;

  const [showProcessors, setShowProcessors] = useState(false);
  const [showMotherboards, setShowMotherboards] = useState(false);
  const [showKorpus, setShowKorpus] = useState(false);
  const [showVideoKarta, setShowVideoKarta] = useState(false);
  const [showOhladProc, setShowOhladProc] = useState(false);
  const [showOperPamyat, setShowOperPamyat] = useState(false);
  const [showNakopit, setShowNakopit] = useState(false);
  const [showBlockPit, setShowBlockPit] = useState(false);

  const toggleProcessors = () => {
    setShowProcessors(!showProcessors);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleMotherboards = () => {
    setShowMotherboards(!showMotherboards);
    setShowProcessors(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleKorpus = () => {
    setShowKorpus(!showKorpus);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleVideoKarta = () => {
    setShowVideoKarta(!showVideoKarta);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleOhladProc = () => {
    setShowOhladProc(!showOhladProc);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleOperPamyat = () => {
    setShowOperPamyat(!showOperPamyat);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowNakopit(false);
    setShowBlockPit(false);
  };

  const toggleNakopit = () => {
    setShowNakopit(!showNakopit);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowBlockPit(false);
  };

  const toggleBlockPit = () => {
    setShowBlockPit(!showBlockPit);
    setShowProcessors(false);
    setShowMotherboards(false);
    setShowKorpus(false);
    setShowVideoKarta(false);
    setShowOhladProc(false);
    setShowOperPamyat(false);
    setShowNakopit(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/Glav" element={<Glav />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Raslogin" element={<Raslogin />} />
        <Route
          path="/Corzina"
          element={
            <Corzina
              items={cartItems}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              setCartItems={setCartItems}
              getTotalPrice={getTotalPrice}
              selectedItems={selectedItems}
            />
          }
        />
        <Route
          path="/"
          element={
            <>
              <div>
                <Header />

                <div
                  style={{
                    fontSize: "30px",
                    position: "absolute",
                    marginLeft: "1660px",
                    marginTop: "-80px",
                  }}
                ></div>
              </div>

              <div className="containerbtnconfig" style={{ marginTop: "30px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="btnconfig"
                    style={{ marginLeft: "15px" }}
                    onClick={toggleProcessors}
                  >
                    {" "}
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={proc}
                    />
                    <article>
                      <p className="pconfig">Процессоры</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleMotherboards}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={materinka}
                    />
                    <article>
                      <p className="pconfig">Материнские платы</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleKorpus}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={korpus}
                    />
                    <article>
                      <p className="pconfig">Корпуса</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleVideoKarta}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={videocart}
                    />
                    <article>
                      <p className="pconfig">Видеокарты</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleOhladProc}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={TDP}
                    />
                    <article>
                      <p className="pconfig">Охлаждение процессора</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleOperPamyat}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={ram}
                    />
                    <article>
                      <p className="pconfig">Оперативная память</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px" }}
                    onClick={toggleNakopit}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={HDD}
                    />
                    <article>
                      <p className="pconfig">Накопители</p>
                    </article>
                  </button>

                  <button
                    className="btnconfig"
                    style={{ marginLeft: "20px", marginRight: "15px" }}
                    onClick={toggleBlockPit}
                  >
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={blockpit}
                    />
                    <article>
                      <p className="pconfig">Блоки Питания</p>
                    </article>
                  </button>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "80px",
                    }}
                  >
                    <button className="btnsbros" onClick={handleButtonClick}>
                      Сбросить весь выбор
                    </button>
                  </div>
                  <div style={{ display: "none" }}>
                    <h2>Процессоры: </h2>
                    <h2>
                      выбранная материнская плата с сокетом:{" "}
                      {selectedMotherboardSocket}
                    </h2>
                    <h2>
                      форм-фактор выбранной материнской платы:{" "}
                      {selectedMotherboardFormFactor}
                    </h2>
                    <h2>
                      длина выбранной видео карты: {selectedVideocartaDlina}
                    </h2>
                    <h2>выбор охлаждения: {selectedOhlad}</h2>
                    <h2>выбор оперативки: {selectedOperativa}</h2>
                    <h2>выбор блока питания: {selectedBlockpit}</h2>
                  </div>

                  <div
                    style={{
                      marginTop: "-40px",
                      position: "absolute",
                      marginLeft: "110px",
                    }}
                  >
                    <ProgressBar progress={progress} />
                  </div>

                  <div className="spisokviborcomplect">
                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранный процессор: </h2>
                      <p className="spistext">{selectedProcessorName}</p>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">
                        Выбранная материнская плата:{" "}
                      </h2>
                      <p className="spistext">{selectedMotherboardName}</p>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранный корпус: </h2>
                      <p className="spistext">{selectedKorpusName}</p>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранная видеокарта: </h2>
                      <p className="spistext">{selectedVideocartName}</p>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранное охлаждение: </h2>
                      <p className="spistext">{selectedOhladName}</p>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранная опертивная память:</h2>
                      <div className="spistext">
                        {Object.entries(selectedOperativaCounts).map(
                          ([name, count]) => (
                            <div
                              style={{
                                marginTop: "5px",
                                borderBottom: "1px solid black",
                              }}
                              key={name}
                            >
                              {name}
                              {count > 1 ? (
                                <div
                                  style={{
                                    display: "flex",
                                    paddingTop: "15px",
                                    fontSize: "19px",
                                  }}
                                >
                                  Количество:{" "}
                                  <h3
                                    style={{
                                      marginTop: "-2px",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    {" "}
                                    x{count}
                                  </h3>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранный накопитель: </h2>
                      <div className="spistext">
                        {Object.keys(selectedNakopitName).map((name) => (
                          <div
                            style={{
                              marginTop: "5px",
                              borderBottom: "1px solid black",
                            }}
                            key={name}
                          >
                            {name}{" "}
                            {selectedNakopitName[name] > 1 ? (
                              <div
                                style={{
                                  display: "flex",
                                  paddingTop: "15px",
                                  fontSize: "19px",
                                }}
                              >
                                Количество:{" "}
                                <h3
                                  style={{
                                    marginTop: "-2px",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {" "}
                                  x{selectedNakopitName[name]}
                                </h3>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="blocktextspis">
                      <h2 className="spiszagl">Выбранный блок питания: </h2>
                      <p className="spistext">{selectedBlockpitName}</p>
                    </div>
                  </div>
                </div>

                <div style={{ width: "100%", height: "20px" }}></div>

                <div style={{ backgroundColor: "rgb(238, 236, 236)" }}>
                  {showProcessors && (
                    <div>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        процессоры
                      </h3>
                      <div>
                        {filteredProcessors.map((processor) => (
                          <div className="blockprocessor" key={processor.id}>
                            <Processor
                              processor={processor}
                              onAddToCart={handleAddToCart}
                              onProcessorSelect={handleProcessorSelect}
                              isSelected={
                                processor.socket === selectedProcessorSocket
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {showMotherboards && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        материнские платы
                      </h3>
                      <div>
                        {filteredMotherboards.map((motherboard) => (
                          <div className="blockprocessor" key={motherboard.id}>
                            <Motherboard
                              onAddToCart={handleAddToCart}
                              motherboard={motherboard}
                              onMotherboardSelect={handleMotherboardSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showKorpus && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Корпуса
                      </h3>
                      <div>
                        {filteredKorpus.map((korpus) => (
                          <div className="blockprocessor" key={korpus.id}>
                            <Korpus
                              korpus={korpus}
                              onAddToCart={handleAddToCart}
                              onKorpusSelect={handleKorpusSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showVideoKarta && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Видеокарты
                      </h3>
                      <div>
                        {filteredVideocarta.map((videocart) => (
                          <div className="blockprocessor" key={videocart.id}>
                            <Videocart
                              videocart={videocart}
                              onAddToCart={handleAddToCart}
                              onVideoCartSelect={handleVideoCartSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showOhladProc && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Охлаждение
                      </h3>
                      <div>
                        {filteredOhlad.map((ohlad) => (
                          <div className="blockprocessor" key={ohlad.id}>
                            <Ohlad
                              ohlad={ohlad}
                              onAddToCart={handleAddToCart}
                              onOhladSelect={handleOhladSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showOperPamyat && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Оперативная память
                      </h3>
                      <div>
                        {filteredOperativa.map((operativa) => (
                          <div className="blockprocessor" key={operativa.id}>
                            <Operativa
                              operativa={operativa}
                              onAddToCart={handleAddToCart}
                              onOperativaSelect={handleOperativaSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showNakopit && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Накопители
                      </h3>
                      <div>
                        {filteredNakopiteli.map((nakopiteli) => (
                          <div className="blockprocessor" key={nakopiteli.id}>
                            <Nakopiteli
                              nakopiteli={nakopiteli}
                              onAddToCart={handleAddToCart}
                              onNakopitSelect={() =>
                                handleNakopitSelect(nakopiteli.id)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {showBlockPit && (
                    <>
                      <h3 className="showh3" style={{ textAlign: "center" }}>
                        Блоки питания
                      </h3>
                      <div>
                        {filteredBlockpit.map((blockpit) => (
                          <div className="blockprocessor" key={blockpit.id}>
                            <Blockpit
                              blockpit={blockpit}
                              onAddToCart={handleAddToCart}
                              onBlockpitSelect={handleBlockpitSelect}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Home;
