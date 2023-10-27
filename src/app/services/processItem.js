const moment = require("moment");

const imgUrls = {
  1: "https://www.mobox.io/dragonmo/assets/1-05c6d54c.png",
  2: "https://www.mobox.io/dragonmo/assets/2-8bd83b72.png",
  3: "https://www.mobox.io/dragonmo/assets/3-cdba313c.png",
  6: "https://www.mobox.io/dragonmo/assets/6-870beb03.png",
  7: "https://www.mobox.io/dragonmo/assets/7-b96067af.png",
  8: "https://www.mobox.io/dragonmo/assets/8-11c71d77.png",
  11: "https://www.mobox.io/dragonmo/assets/11-c016f90b.png",
  12: "https://www.mobox.io/dragonmo/assets/12-7f229909.png",
  13: "https://www.mobox.io/dragonmo/assets/13-f86b201c.png",
  16: "https://www.mobox.io/dragonmo/assets/16-eb9f2adb.png",
  17: "https://www.mobox.io/dragonmo/assets/17-6fbb150b.png",
  18: "https://www.mobox.io/dragonmo/assets/18-9715ce12.png",
  21: "https://www.mobox.io/dragonmo/assets/21-fb85cc11.png",
  22: "https://www.mobox.io/dragonmo/assets/22-3b8e218d.png",
  23: "https://www.mobox.io/dragonmo/assets/23-2b355718.png",
  26: "https://www.mobox.io/dragonmo/assets/26-791fc4d1.png",
  27: "https://www.mobox.io/dragonmo/assets/27-4f076d50.png",
  28: "https://www.mobox.io/dragonmo/assets/28-ef6d3fbb.png",
  31: "https://www.mobox.io/dragonmo/assets/31-8f308f8e.png",
  32: "https://www.mobox.io/dragonmo/assets/32-e6dde67a.png",
  35: "https://www.mobox.io/dragonmo/assets/35-f47a90d3.png",
  36: "https://www.mobox.io/dragonmo/assets/36-a3a919cf.png",
  39: "https://www.mobox.io/dragonmo/assets/39-8edd40c1.png",
  40: "https://www.mobox.io/dragonmo/assets/40-58cadd45.png",
  43: "https://www.mobox.io/dragonmo/assets/43-9b4428dd.png",
  44: "https://www.mobox.io/dragonmo/assets/44-5b0a5cdf.png",
  47: "https://www.mobox.io/dragonmo/assets/47-62cb6def.png",
  48: "https://www.mobox.io/dragonmo/assets/48-aca75feb.png",
  51: "https://www.mobox.io/dragonmo/assets/51-e5b811b0.png",
  52: "https://www.mobox.io/dragonmo/assets/52-7b827357.png",
  55: "https://www.mobox.io/dragonmo/assets/55-9ef4dfbb.png",
  56: "https://www.mobox.io/dragonmo/assets/56-a4962bfb.png",
  59: "https://www.mobox.io/dragonmo/assets/59-92ef4ae4.png",
  60: "https://www.mobox.io/dragonmo/assets/60-76981e8b.png",
  63: "https://www.mobox.io/dragonmo/assets/63-89ce6093.png",
  64: "https://www.mobox.io/dragonmo/assets/64-e90a05ad.png",
  67: "https://www.mobox.io/dragonmo/assets/67-a27b73a7.png",
  68: "https://www.mobox.io/dragonmo/assets/68-320159ed.png",
  71: "https://www.mobox.io/dragonmo/assets/71-d0f30f2a.png",
  72: "https://www.mobox.io/dragonmo/assets/72-83246af3.png",
  75: "https://www.mobox.io/dragonmo/assets/75-d21842f4.png",
  76: "https://www.mobox.io/dragonmo/assets/76-21120af7.png",
  79: "https://www.mobox.io/dragonmo/assets/79-ef001727.png",
  80: "https://www.mobox.io/dragonmo/assets/80-346e2cdb.png",
  83: "https://www.mobox.io/dragonmo/assets/83-c2f669ae.png",
  84: "https://www.mobox.io/dragonmo/assets/84-a82c4f00.png",
  87: "https://www.mobox.io/dragonmo/assets/87-f7f3e41f.png",
  88: "https://www.mobox.io/dragonmo/assets/88-56097473.png",
  91: "https://www.mobox.io/dragonmo/assets/91-e88735d2.png",
  92: "https://www.mobox.io/dragonmo/assets/92-7fac74f1.png",
  95: "https://www.mobox.io/dragonmo/assets/95-f5cd7991.png",
  96: "https://www.mobox.io/dragonmo/assets/96-b91d61f6.png",
  99: "https://www.mobox.io/dragonmo/assets/99-72e85eb0.png",
  100: "https://www.mobox.io/dragonmo/assets/100-aa8c0a69.png",
  103: "https://www.mobox.io/dragonmo/assets/103-bfce84af.png",
  104: "https://www.mobox.io/dragonmo/assets/104-95dcd784.png",
  107: "https://www.mobox.io/dragonmo/assets/107-150a2e21.png",
  108: "https://www.mobox.io/dragonmo/assets/108-5e869b3a.png",
  111: "https://www.mobox.io/dragonmo/assets/111-db95227b.png",
  112: "https://www.mobox.io/dragonmo/assets/112-10b720c6.png",
  115: "https://www.mobox.io/dragonmo/assets/115-c1c37e37.png",
  116: "https://www.mobox.io/dragonmo/assets/116-69accc55.png",
  119: "https://www.mobox.io/dragonmo/assets/119-53263fd7.png",
  120: "https://www.mobox.io/dragonmo/assets/120-0669b614.png",
  123: "https://www.mobox.io/dragonmo/assets/123-07f8e3cc.png",
  124: "https://www.mobox.io/dragonmo/assets/124-10b117e0.png",
  127: "https://www.mobox.io/dragonmo/assets/127-5bd42f51.png",
  128: "https://www.mobox.io/dragonmo/assets/128-1331e5e6.png",
  131: "https://www.mobox.io/dragonmo/assets/131-e15ea6cd.png",
  132: "https://www.mobox.io/dragonmo/assets/132-36cddc99.png",
  135: "https://www.mobox.io/dragonmo/assets/135-0c231823.png",
  136: "https://www.mobox.io/dragonmo/assets/136-e9c983be.png",
  139: "https://www.mobox.io/dragonmo/assets/139-3227eb3a.png",
  140: "https://www.mobox.io/dragonmo/assets/140-ed4cd0e0.png",
  143: "https://www.mobox.io/dragonmo/assets/143-cd09639c.png",
  144: "https://www.mobox.io/dragonmo/assets/144-081f8bda.png",
  147: "https://www.mobox.io/dragonmo/assets/147-65c4f602.png",
  148: "https://www.mobox.io/dragonmo/assets/148-12e2ba2b.png",
  151: "https://www.mobox.io/dragonmo/assets/151-938788e7.png",
  153: "https://www.mobox.io/dragonmo/assets/153-dbbd5795.png",
  155: "https://www.mobox.io/dragonmo/assets/155-a3dca7f9.png",
  157: "https://www.mobox.io/dragonmo/assets/157-b1909b3a.png",
  161: "https://www.mobox.io/dragonmo/assets/161-3bc3487e.png",
  163: "https://www.mobox.io/dragonmo/assets/163-36528808.png",
  165: "https://www.mobox.io/dragonmo/assets/165-9fd88f27.png",
  171: "https://www.mobox.io/dragonmo/assets/171-cf96866f.png",
  173: "https://www.mobox.io/dragonmo/assets/173-8ef5176f.png",
  181: "https://www.mobox.io/dragonmo/assets/181-321c6231.png",
  191: "https://www.mobox.io/dragonmo/assets/191-b80e3bce.png",
  193: "https://www.mobox.io/dragonmo/assets/193-a6907811.png",
  195: "https://www.mobox.io/dragonmo/assets/195-eab783c0.png",
  197: "https://www.mobox.io/dragonmo/assets/197-19f70930.png",
  199: "https://www.mobox.io/dragonmo/assets/199-ab0f5f91.png",
  201: "https://www.mobox.io/dragonmo/assets/201-2b36a076.png",
  203: "https://www.mobox.io/dragonmo/assets/203-aee8d5ab.png",
  205: "https://www.mobox.io/dragonmo/assets/205-196f4f97.png",
  211: "https://www.mobox.io/dragonmo/assets/211-51fc6095.png",
  213: "https://www.mobox.io/dragonmo/assets/213-fba142f4.png",
  221: "https://www.mobox.io/dragonmo/assets/221-47f33280.png",
  231: "https://www.mobox.io/dragonmo/assets/231-dff7bb89.png",
  233: "https://www.mobox.io/dragonmo/assets/233-91bd44f0.png",
  235: "https://www.mobox.io/dragonmo/assets/235-56108ab6.png",
  237: "https://www.mobox.io/dragonmo/assets/237-55d9ae3c.png",
  241: "https://www.mobox.io/dragonmo/assets/241-a82a2e6e.png",
  243: "https://www.mobox.io/dragonmo/assets/243-545f72a9.png",
  245: "https://www.mobox.io/dragonmo/assets/245-4e96a0fe.png",
  259: "https://www.mobox.io/dragonmo/assets/259-ee0d8b29.png",
  267: "https://www.mobox.io/dragonmo/assets/267-a1720a54.png",
  269: "https://www.mobox.io/dragonmo/assets/269-9a87d0b2.png",
  271: "https://www.mobox.io/dragonmo/assets/271-1a83e538.png",
  273: "https://www.mobox.io/dragonmo/assets/273-51979840.png",
  281: "https://www.mobox.io/dragonmo/assets/281-84855daf.png",
  295: "https://www.mobox.io/dragonmo/assets/295-fc72a7b8.png",
  297: "https://www.mobox.io/dragonmo/assets/297-6c152487.png",
  299: "https://www.mobox.io/dragonmo/assets/299-e1528308.png",
  303: "https://www.mobox.io/dragonmo/assets/303-3e41be4e.png",
  305: "https://www.mobox.io/dragonmo/assets/305-c29b40f2.png",
  307: "https://www.mobox.io/dragonmo/assets/307-c392e041.png",
  309: "https://www.mobox.io/dragonmo/assets/309-2e60b400.png",
  319: "https://www.mobox.io/dragonmo/assets/319-9037fe74.png",
  327: "https://www.mobox.io/dragonmo/assets/327-5d2f8874.png",
  329: "https://www.mobox.io/dragonmo/assets/329-47a623fa.png",
  335: "https://www.mobox.io/dragonmo/assets/335-4db99a7f.png",
  337: "https://www.mobox.io/dragonmo/assets/337-d12be88e.png",
  339: "https://www.mobox.io/dragonmo/assets/339-d2d7e3d7.png",
  343: "https://www.mobox.io/dragonmo/assets/343-392365e5.png",
  345: "https://www.mobox.io/dragonmo/assets/345-514932d1.png",
  347: "https://www.mobox.io/dragonmo/assets/347-626d5a02.png",
  349: "https://www.mobox.io/dragonmo/assets/349-04059f0c.png",
  359: "https://www.mobox.io/dragonmo/assets/359-0d275f52.png",
  367: "https://www.mobox.io/dragonmo/assets/367-8d97452d.png",
  369: "https://www.mobox.io/dragonmo/assets/369-cf34e41d.png",
  375: "https://www.mobox.io/dragonmo/assets/375-57f75024.png",
  377: "https://www.mobox.io/dragonmo/assets/377-a14d211a.png",
  379: "https://www.mobox.io/dragonmo/assets/379-df9661d9.png",
  383: "https://www.mobox.io/dragonmo/assets/383-844d79ef.png",
  385: "https://www.mobox.io/dragonmo/assets/385-0b54f245.png",
  387: "https://www.mobox.io/dragonmo/assets/387-0f0c1f1e.png",
  389: "https://www.mobox.io/dragonmo/assets/389-c1a8c01d.png",
  391: "https://www.mobox.io/dragonmo/assets/391-3ed13c64.png",
  393: "https://www.mobox.io/dragonmo/assets/393-1cc228cd.png",
  395: "https://www.mobox.io/dragonmo/assets/395-06aecb9c.png",
  397: "https://www.mobox.io/dragonmo/assets/397-bd3db9a9.png",
  399: "https://www.mobox.io/dragonmo/assets/399-7243a60a.png",
  401: "https://www.mobox.io/dragonmo/assets/401-124a1bf3.png",
  403: "https://www.mobox.io/dragonmo/assets/403-f42190ad.png",
  405: "https://www.mobox.io/dragonmo/assets/405-8670aa2d.png",
  407: "https://www.mobox.io/dragonmo/assets/407-b3254d96.png",
  409: "https://www.mobox.io/dragonmo/assets/409-4ac421e4.png",
  411: "https://www.mobox.io/dragonmo/assets/411-0ca10165.png",
  413: "https://www.mobox.io/dragonmo/assets/413-18d1b037.png",
  415: "https://www.mobox.io/dragonmo/assets/415-ddaec70a.png",
  417: "https://www.mobox.io/dragonmo/assets/417-5d4acb81.png",
  419: "https://www.mobox.io/dragonmo/assets/419-e6981970.png",
  423: "https://www.mobox.io/dragonmo/assets/423-920bf3b6.png",
  425: "https://www.mobox.io/dragonmo/assets/425-aa5f48ff.png",
  429: "https://www.mobox.io/dragonmo/assets/429-6d6129a9.png",
  431: "https://www.mobox.io/dragonmo/assets/431-423ef34f.png",
  435: "https://www.mobox.io/dragonmo/assets/435-2eb63bb2.png",
  437: "https://www.mobox.io/dragonmo/assets/437-d0adc256.png",
  441: "https://www.mobox.io/dragonmo/assets/441-f2338881.png",
  443: "https://www.mobox.io/dragonmo/assets/443-91a08271.png",
  447: "https://www.mobox.io/dragonmo/assets/447-033cac3e.png",
  449: "https://www.mobox.io/dragonmo/assets/449-7ea5d8cc.png",
  455: "https://www.mobox.io/dragonmo/assets/455-8f0f93cf.png",
  461: "https://www.mobox.io/dragonmo/assets/461-24dde4ca.png",
  467: "https://www.mobox.io/dragonmo/assets/467-7b5df814.png",
  473: "https://www.mobox.io/dragonmo/assets/473-723d9eb6.png",
  479: "https://www.mobox.io/dragonmo/assets/479-fcdc0865.png",
  491: "https://www.mobox.io/dragonmo/assets/491-502b993e.png",
  511: "https://www.mobox.io/dragonmo/assets/511-a97b84c7.png",
  513: "https://www.mobox.io/dragonmo/assets/513-1fbcbb1d.png",
  515: "https://www.mobox.io/dragonmo/assets/515-ef24f997.png",
  517: "https://www.mobox.io/dragonmo/assets/517-172dc697.png",
  519: "https://www.mobox.io/dragonmo/assets/519-774136ff.png",
  521: "https://www.mobox.io/dragonmo/assets/521-c3423799.png",
  523: "https://www.mobox.io/dragonmo/assets/523-adb2497b.png",
  525: "https://www.mobox.io/dragonmo/assets/525-f0521215.png",
  527: "https://www.mobox.io/dragonmo/assets/527-1e6dab46.png",
  529: "https://www.mobox.io/dragonmo/assets/529-17eaa522.png",
  531: "https://www.mobox.io/dragonmo/assets/531-5da66b9b.png",
  533: "https://www.mobox.io/dragonmo/assets/533-a401eecc.png",
  535: "https://www.mobox.io/dragonmo/assets/535-85856dd0.png",
  537: "https://www.mobox.io/dragonmo/assets/537-64d2301b.png",
  539: "https://www.mobox.io/dragonmo/assets/539-fd3d8137.png",
  543: "https://www.mobox.io/dragonmo/assets/543-6ac63ba6.png",
  545: "https://www.mobox.io/dragonmo/assets/545-c389d24d.png",
  549: "https://www.mobox.io/dragonmo/assets/549-6db9739d.png",
  551: "https://www.mobox.io/dragonmo/assets/551-eae17e5d.png",
  555: "https://www.mobox.io/dragonmo/assets/555-eaa61aff.png",
  557: "https://www.mobox.io/dragonmo/assets/557-27b780eb.png",
  561: "https://www.mobox.io/dragonmo/assets/561-161fa9ed.png",
  563: "https://www.mobox.io/dragonmo/assets/563-c3e9084b.png",
  567: "https://www.mobox.io/dragonmo/assets/567-32d9daf4.png",
  569: "https://www.mobox.io/dragonmo/assets/569-66126a2a.png",
  575: "https://www.mobox.io/dragonmo/assets/575-80c4bf1b.png",
  581: "https://www.mobox.io/dragonmo/assets/581-c6d4d484.png",
  587: "https://www.mobox.io/dragonmo/assets/587-6afee917.png",
  593: "https://www.mobox.io/dragonmo/assets/593-148ca883.png",
  599: "https://www.mobox.io/dragonmo/assets/599-70d68e07.png",
  631: "https://www.mobox.io/dragonmo/assets/631-b29fed25.png",
  633: "https://www.mobox.io/dragonmo/assets/633-740ca5d8.png",
  635: "https://www.mobox.io/dragonmo/assets/635-3640ba29.png",
  637: "https://www.mobox.io/dragonmo/assets/637-607294d2.png",
  639: "https://www.mobox.io/dragonmo/assets/639-8f1859da.png",
  641: "https://www.mobox.io/dragonmo/assets/641-baecef5a.png",
  643: "https://www.mobox.io/dragonmo/assets/643-f1d2012d.png",
  645: "https://www.mobox.io/dragonmo/assets/645-b7021173.png",
  647: "https://www.mobox.io/dragonmo/assets/647-1ce1d190.png",
  649: "https://www.mobox.io/dragonmo/assets/649-a70fd07d.png",
  651: "https://www.mobox.io/dragonmo/assets/651-38083714.png",
  653: "https://www.mobox.io/dragonmo/assets/653-d0c3286f.png",
  655: "https://www.mobox.io/dragonmo/assets/655-8a628976.png",
  657: "https://www.mobox.io/dragonmo/assets/657-46a731cd.png",
  659: "https://www.mobox.io/dragonmo/assets/659-48c275f0.png",
  663: "https://www.mobox.io/dragonmo/assets/663-53a7da1b.png",
  665: "https://www.mobox.io/dragonmo/assets/665-cf1cde63.png",
  669: "https://www.mobox.io/dragonmo/assets/669-be8fd848.png",
  671: "https://www.mobox.io/dragonmo/assets/671-2853f044.png",
  675: "https://www.mobox.io/dragonmo/assets/675-48d0070f.png",
  677: "https://www.mobox.io/dragonmo/assets/677-4a077ab7.png",
  681: "https://www.mobox.io/dragonmo/assets/681-3efa4a08.png",
  683: "https://www.mobox.io/dragonmo/assets/683-3d7c74b6.png",
  687: "https://www.mobox.io/dragonmo/assets/687-a4c0ca84.png",
  689: "https://www.mobox.io/dragonmo/assets/689-a6d41fe2.png",
  707: "https://www.mobox.io/dragonmo/assets/707-069a89bb.png",
  713: "https://www.mobox.io/dragonmo/assets/713-eab3e294.png",
  725: "https://www.mobox.io/dragonmo/assets/725-65432fcd.png",
  743: "https://www.mobox.io/dragonmo/assets/743-45bc5771.png",
  749: "https://www.mobox.io/dragonmo/assets/749-bc25c346.png",
  751: "https://www.mobox.io/dragonmo/assets/751-33a42870.png",
  753: "https://www.mobox.io/dragonmo/assets/753-2d349707.png",
  755: "https://www.mobox.io/dragonmo/assets/755-a21fa6b8.png",
  757: "https://www.mobox.io/dragonmo/assets/757-6cdba30f.png",
  759: "https://www.mobox.io/dragonmo/assets/759-64c2a69c.png",
  761: "https://www.mobox.io/dragonmo/assets/761-2499467e.png",
  763: "https://www.mobox.io/dragonmo/assets/763-92092e67.png",
  765: "https://www.mobox.io/dragonmo/assets/765-12006d91.png",
  769: "https://www.mobox.io/dragonmo/assets/769-ca08f3a7.png",
  771: "https://www.mobox.io/dragonmo/assets/771-87bf6ae2.png",
  775: "https://www.mobox.io/dragonmo/assets/775-ff545e66.png",
  777: "https://www.mobox.io/dragonmo/assets/777-ecd53641.png",
  779: "https://www.mobox.io/dragonmo/assets/779-065eb000.png",
  783: "https://www.mobox.io/dragonmo/assets/783-d8a88574.png",
  785: "https://www.mobox.io/dragonmo/assets/785-10c4ff42.png",
  789: "https://www.mobox.io/dragonmo/assets/789-6d48bdf9.png",
  795: "https://www.mobox.io/dragonmo/assets/795-a3d6a6db.png",
  801: "https://www.mobox.io/dragonmo/assets/801-238e4bb4.png",
  803: "https://www.mobox.io/dragonmo/assets/803-05e30cbe.png",
  807: "https://www.mobox.io/dragonmo/assets/807-789ad65d.png",
  809: "https://www.mobox.io/dragonmo/assets/809-35ab8170.png",
  841: "https://www.mobox.io/dragonmo/assets/841-d3d1906c.png",
  843: "https://www.mobox.io/dragonmo/assets/843-ba642cd3.png",
  845: "https://www.mobox.io/dragonmo/assets/845-fbecf413.png",
  851: "https://www.mobox.io/dragonmo/assets/851-ee898e00.png",
  857: "https://www.mobox.io/dragonmo/assets/857-8693647c.png",
  863: "https://www.mobox.io/dragonmo/assets/863-420274f2.png",
  865: "https://www.mobox.io/dragonmo/assets/865-41613825.png",
  867: "https://www.mobox.io/dragonmo/assets/867-08fedcf6.png",
  869: "https://www.mobox.io/dragonmo/assets/869-e1c6e144.png",
  871: "https://www.mobox.io/dragonmo/assets/871-6dd7eb95.png",
  873: "https://www.mobox.io/dragonmo/assets/873-6a516dfa.png",
  877: "https://www.mobox.io/dragonmo/assets/877-91d5de00.png",
  879: "https://www.mobox.io/dragonmo/assets/879-6b7d4db6.png",
  883: "https://www.mobox.io/dragonmo/assets/883-262a46e5.png",
  885: "https://www.mobox.io/dragonmo/assets/885-792f28f1.png",
  895: "https://www.mobox.io/dragonmo/assets/895-57059c1d.png",
  897: "https://www.mobox.io/dragonmo/assets/897-d3ec2902.png",
  899: "https://www.mobox.io/dragonmo/assets/899-03764eb1.png",
  903: "https://www.mobox.io/dragonmo/assets/903-913fa710.png",
  909: "https://www.mobox.io/dragonmo/assets/909-e4bd7874.png",
  913: "https://www.mobox.io/dragonmo/assets/913-b985f5ef.png",
  921: "https://www.mobox.io/dragonmo/assets/921-ed882d48.png",
  927: "https://www.mobox.io/dragonmo/assets/927-e400bb14.png",
  937: "https://www.mobox.io/dragonmo/assets/937-4b61e7b6.png",
  939: "https://www.mobox.io/dragonmo/assets/939-151df171.png",
  961: "https://www.mobox.io/dragonmo/assets/961-e4a70139.png",
  963: "https://www.mobox.io/dragonmo/assets/963-6a674fd2.png",
  965: "https://www.mobox.io/dragonmo/assets/965-417fb675.png",
  969: "https://www.mobox.io/dragonmo/assets/969-90fe74dd.png",
  971: "https://www.mobox.io/dragonmo/assets/971-a00d45f8.png",
  975: "https://www.mobox.io/dragonmo/assets/975-15c7960c.png",
  977: "https://www.mobox.io/dragonmo/assets/977-3956e3c7.png",
  979: "https://www.mobox.io/dragonmo/assets/979-468e894a.png",
  981: "https://www.mobox.io/dragonmo/assets/981-087652f7.png",
  983: "https://www.mobox.io/dragonmo/assets/983-8c8c8d43.png",
  985: "https://www.mobox.io/dragonmo/assets/985-420f7ac6.png",
  987: "https://www.mobox.io/dragonmo/assets/987-3bde235e.png",
  989: "https://www.mobox.io/dragonmo/assets/989-22089159.png",
  1021: "https://www.mobox.io/dragonmo/assets/1021-d9469c85.png",
  1027: "https://www.mobox.io/dragonmo/assets/1027-70196c7e.png",
  1033: "https://www.mobox.io/dragonmo/assets/1033-a4984a6a.png",
  1039: "https://www.mobox.io/dragonmo/assets/1039-8b9a4f77.png",
  1045: "https://www.mobox.io/dragonmo/assets/1045-5acf1a29.png",
  1051: "https://www.mobox.io/dragonmo/assets/1051-e15ac366.png",
  1053: "https://www.mobox.io/dragonmo/assets/1053-b6fb1ef6.png",
  1057: "https://www.mobox.io/dragonmo/assets/1057-0549bedc.png",
  1059: "https://www.mobox.io/dragonmo/assets/1059-f462fb3e.png",
  1063: "https://www.mobox.io/dragonmo/assets/1063-1064b549.png",
  1065: "https://www.mobox.io/dragonmo/assets/1065-48d7a6e8.png",
  1069: "https://www.mobox.io/dragonmo/assets/1069-5e78481a.png",
  1071: "https://www.mobox.io/dragonmo/assets/1071-34034268.png",
  1075: "https://www.mobox.io/dragonmo/assets/1075-e1d84539.png",
  1077: "https://www.mobox.io/dragonmo/assets/1077-5bd4105d.png",
  1081: "https://www.mobox.io/dragonmo/assets/1081-1f39b166.png",
  1083: "https://www.mobox.io/dragonmo/assets/1083-ca4de254.png",
  1085: "https://www.mobox.io/dragonmo/assets/1085-3181e566.png",
  1087: "https://www.mobox.io/dragonmo/assets/1087-5d0047ea.png",
  1089: "https://www.mobox.io/dragonmo/assets/1089-f486973f.png",
  1091: "https://www.mobox.io/dragonmo/assets/1091-595b64c5.png",
  1093: "https://www.mobox.io/dragonmo/assets/1093-28d7a0e5.png",
  1095: "https://www.mobox.io/dragonmo/assets/1095-6d9570a9.png",
  1097: "https://www.mobox.io/dragonmo/assets/1097-540dcca5.png",
  1099: "https://www.mobox.io/dragonmo/assets/1099-9db1fc22.png",
  1101: "https://www.mobox.io/dragonmo/assets/1101-53cd71e1.png",
  1103: "https://www.mobox.io/dragonmo/assets/1103-dca0edd3.png",
  1105: "https://www.mobox.io/dragonmo/assets/1105-682413c5.png",
  1107: "https://www.mobox.io/dragonmo/assets/1107-bcf6d419.png",
  1109: "https://www.mobox.io/dragonmo/assets/1109-52307b29.png",
};

const processItem = function (array) {
  const itensList = [];
  const imgsList = [];

  for (const item of array) {
    let { id, protoId, realPrice, attribute, quality, star, level, skill1, skill2, tx } = item;

    const currentDate = moment().utc();
    const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss [UTC]");

    const found = Object.keys(imgUrls).find((x) => x == protoId);

    switch (quality) {
      case 1:
        quality = "⚪";
        break;
      case 2:
        quality = "🟢";
        break;
      case 3:
        quality = "🟣";
        break;
      case 4:
        quality = "🟠";
        break;
      case 5:
        quality = "🔴";
        break;
    }

    const nft = `
💸 NEW DRAGON SOLD !
Price: ${realPrice / 1e9 / 1e9} ETH
Attribute: ${attribute} Power
Quality: ${quality}
Star: ${star}
Level: ${level}
Date: ${formattedDate}

🔎 - [Hash](https://arbiscan.io/tx/${tx})`;

    itensList.push(nft);
    imgsList.push(imgUrls[found]);
  }

  return [itensList, imgsList];
};

module.exports = { processItem };
