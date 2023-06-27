const galleryImg = [
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349533352_220299094116959_2418033148943114369_n.jpg?stp=c51.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Se1biYTZpvAAX8kwRck&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAvygjCwZNxxa4yZxyKwJTNYQ4fbNrKte_H--mLGhutYg&oe=649EE7D5",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349526234_1015039099654309_5465579436748788499_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Hk1cO778he8AX-iXVsK&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDSw4TvZpvqURdl5chiQYN30OJo0-oCC_aDl1_eyaoRNg&oe=649ECC42",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349850536_969239780876695_4177641888465677996_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=JoGqSGsKZ4wAX8-BShc&_nc_ht=scontent-ssn1-1.xx&oh=00_AfD4iZ-GXDFj6qaus04nZF7s-eOzM3l5-3gkVY2lvnJKtA&oe=649F99AC",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/350100268_142908628780705_902938989128088155_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=BcpKXt1ORqIAX8j_o8d&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDaNNclS8nkG2wla7kkAWPjuBOfEA6XUA3OdlW4gnrV-A&oe=64A074CD",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349749219_211296304563973_4868854836131002125_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=O_sUWlSuFT4AX9bq4Je&_nc_ht=scontent-ssn1-1.xx&oh=00_AfChO5BgH55ZOahF2uoJZXsbRVMFvSi_tE8zqMNjK-BKNA&oe=64A07CE8",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349639352_258684893347901_8510418718111651147_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=uOVej2QyWgEAX_RFzJI&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDNgcxiwCvfnzvtK1Ugw5oQlcsOUaj9LOLkjAKBelxN5A&oe=64A0530F",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349863121_775986850847803_5370616858248855393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=GLV3gJcHZ6AAX_fyX1q&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCZGsegYtzcycAMLLMhauivyC2gy-Ohbmps7zZ5Yvdz-A&oe=649F2067",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349884727_958724568740832_3087773785947451126_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=DLH6bG6toxQAX-Atecx&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBrYw_sW8B8mTvGl0EXI9lCd-4uVvNcbgKoSjsdNgARig&oe=649EE00A",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349631446_572595534959563_7761606676162814139_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=5hFER30mMF0AX-MymM5&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCq0Ko3RGmmVeaovm_15vBN8B4cfHkuS4V5Y54mcIkTvg&oe=64A06415",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349773389_188646110800455_2104414489114365236_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=fV3R0Dry2GUAX9W5kJC&_nc_ht=scontent-ssn1-1.xx&oh=00_AfD3w4ZJiG5Pb_X2fFgmW7WbmOC9Wc4qDN8Sl3D1FsUFQw&oe=649EBD45",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/350095518_766735738333464_8582507828108348250_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=7WNkOqVRLA4AX_pXmPT&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAtLCunbn0ORFoQ2VkDpuBaj747l9D_yjXUCHjzupTrWA&oe=649FDC85",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349644676_996197445142422_7221120506915285656_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=ESPDfY-seX0AX_Yuvpt&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDs_4QvZklmGPTHeycrbF8yB7h0dgDHGKXtrnGUzBFHtQ&oe=64A0983D",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349742869_166554242822045_6898310690411049681_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JhMV9BHke_oAX_tgacA&_nc_ht=scontent-ssn1-1.xx&oh=00_AfC3Eq27j2Nk6F4i9kclw3OhJqKVx9qlMlhOT2JZH1eQbQ&oe=64A01540",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349171174_138970169179524_695336917361712964_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=9BXsfy7JcRIAX_4Mceo&_nc_ht=scontent-ssn1-1.xx&oh=00_AfA19MZX3V-gvsC8F9EC1hLiZzAeRnVeWHW1p9SfJLH4rQ&oe=64A07A4B",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349170427_3408886969328591_2775453347886924506_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=LUyHXAQvEPwAX_1FUIa&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCKa3cSHc6e3dJFD--filHKwsFWzpKNjK5tklKJCx1C9g&oe=649ED700",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349600675_6196541150435411_2087691630358938611_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=wZuIb9XGy1QAX9f7aVe&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBojhcClA_E_yi8BsTSMKx8YO1wlMmSlgPS5Xuz40Dnkg&oe=649F81F8",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349927262_1005733670588503_6321657220892186314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=7_kXqUzdyScAX8E0WQB&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDbR431JEql4x8BOQe5ZchpiwNt_nsEWhkruBhX7IM0bA&oe=649FBA06",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349565266_199788242933743_3037521107993451797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=KbAvOp1ZMyoAX8whCIQ&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBYPCPiOYzleNMu5jx4GGTA0HobhtWT8Y7MVDRHaODX1w&oe=64A002A8",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349604532_782419010004645_377064466403941676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=v-VCG-5VKP8AX_SCM26&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCsUFwmKnxWiM5gQt6ae-YKVxxW-pVQZFJHQqnPRcxzFw&oe=649FBFF7",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349730480_795619328749505_1303135928544521059_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=InnnbG6di4oAX-B81QD&_nc_oc=AQkE4lIffE_Z_v5AjgwykNcoP3YxuhX6iINv8L1cyZZZ55mOVI4P9MVPttDdIpwDDG8&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCxLHx3TYJKhB4IIf4D94UrgO2Tu_-P5IcXJ5wHFJOlVg&oe=64A09064",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349594721_5795986693838583_4002008556622554205_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=vY9qtOki-VkAX-oWaBJ&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBqZFtW14bqzvxVxLaC3wvDJCXEM4d_WiO5VvEC-PXuLg&oe=649F8D36",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349588184_246482884964510_805108768943869385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=3vY-m9dGXa0AX90spGk&_nc_ht=scontent-ssn1-1.xx&oh=00_AfC97QxYcSeArQOvUa6c0qZ7wxPOaV97Og7TEzt12MDSUg&oe=649EFB6A",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349063047_2186750151525458_7531458691728356203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=VTv_LG-S408AX96cggM&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBYxqIrKG5KyTFPaftOoIMTV3HAgMpPLr3NLvUzWoKiyA&oe=649EA85B",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349064802_569156815379649_8799185761220159714_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=QxvcB9vd2i4AX9aMb0y&_nc_ht=scontent-ssn1-1.xx&oh=00_AfD9Sh3f4Y6EfvgVpy6TxJT7-wfW8X23jXoSbyjybCLUcg&oe=649F31B4",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348993119_751277613454610_4818688786071858637_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=tPzCR3bm3yAAX95Mdj5&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDEXKKY0OFzDYLNa55YDSTGf9GLvQYoOSHHjy9i2V-BuA&oe=649F9056",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349017788_1942834572731152_2462089307923242124_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=kWBPAxdxY8AAX8QKv-g&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBcQSi_LUe7LkxV5oSUwo0IR9XfAo_sxbXAtmNhfq1GwA&oe=649FE3AE",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348967580_757302306145370_3421173160929045101_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=BjiPDYn1kN8AX9iiIhi&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBwmemkJeQhQj3LlJ7AI1bvuJu4zL1HzRFVfDXuUUMHyA&oe=649EA607",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348963679_1188411309222667_307476314665496721_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=cCtEbXcoseIAX8j6OJt&_nc_ht=scontent-ssn1-1.xx&oh=00_AfC7wvhph2yEMYLSeJTx0xtuQu_Lh4ijtCzLLZI43_btYw&oe=64A04694",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348932183_927970965140945_3152180538600380953_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=jrzTIPOGXaEAX_54BWX&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAfSGcUG58T0KT6TlB7P4SNg0swXpToy1osSz9ylPkEDw&oe=649F9F5F",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349055769_130652456689885_1723940428891306238_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=HQtYGCi8_MEAX-i5BX-&_nc_ht=scontent-ssn1-1.xx&oh=00_AfA_b9EBvVNLNxCUg8F_VOT3u6p4oxcMMTmLCxlafVCTww&oe=649FCC71",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349107386_897503501345198_8385697136190435267_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=K7Uhn9B8qtAAX9-wU4F&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBsFCy5IOddCnNCHfaaGVi3CagDqGTSOBXxmzLQuV9syw&oe=64A070FE",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348987039_635164671996427_8227886983202489386_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=uzhPAOwvr4gAX86zmCm&_nc_ht=scontent-ssn1-1.xx&oh=00_AfD9I1psvt5474qitzYcw8zwlbuMpWb16nuVBWXsEedy1Q&oe=649EA928",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348976491_206208925571324_2317281758742419086_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=8IYsAMOcZ48AX_eMy10&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB_95e4qUgGjg2vhfIkHL7p94dCYD1PtIEFxEV-BPLr-Q&oe=649F4E3F",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348920858_809160343964774_1797160053753215535_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ktV1fRRCMX0AX_TcV8u&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBagdxFSZfNSutuGGL5arZIB9sYHWKE_fZTzUaVIpt6jA&oe=649EEAD9",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/349088511_200451239094833_4734237990093209177_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=FmtwBeRyfxAAX8XLYeL&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCgCrC_ekwSsYYQfNZQxl9KPhEZVw4ObLKG6SwEDjc2Hg&oe=64A06432",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348567495_266681825814862_4827694378249333140_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ykKruiFfsDQAX88bE6W&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB1CDZLUyZXCYdr3YATmhkBTaOvvCiQ5mgfJ64qgWDXmg&oe=649F6FD8",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348554913_1276462896413262_2386390468094413635_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=u9x80w21jLwAX-mM8fg&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDn530FhmWJrY3ur9ECJoXtha06ZgobmSwOA7lzgIfb7g&oe=649F47B1",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348557688_235869385742432_4794632851129558884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=bwsXEvvNoScAX-z6wVH&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBXsPO37iyjZXj8zn4rLdBlDEqztyhRmOj-x56wsMtAYw&oe=649F498F",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348551319_2082381402153486_955453497273387148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=W0ierrnAa24AX91TZ0t&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAAMcZUruUH3-nTMMFWTOoy5-aM8Zkb7fPrcmNdAAreOg&oe=649F2964",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348703147_3205992116213751_1745721737394839126_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=wa-_oUW4c0EAX9Yxb1r&_nc_ht=scontent-ssn1-1.xx&oh=00_AfC3tCG3KdjgmeJJiUO2dHjsWd5QNtjHBjqaaA8YOzUONA&oe=649F839E",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348606367_959934458495743_3316321074344020715_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=tLQlPw6mDTEAX_DkhWU&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBLTZfWcTK4xiklUuTgD6AEVKRy7vUsaLd8RDjR8B_u-g&oe=649FB97F",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348431997_978398443291455_5483265143883662302_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=gtuCBpqBEEsAX_82McW&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCzyR5bJvq4cVSdvoIDo8cvFC_q-B1NShjuy_vDplT54A&oe=649FFE91",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348546967_766797411907217_5962622719553647_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=P5M5ViG1B0QAX-zxShQ&_nc_oc=AQk5YYJjWGmjEe6Fin6GzuGSKXcVMOwyF2zr4cVQv6as9wMVl84Nw4_DX-_r4CaIfeQ&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAH6xQb6eCN7s11UXHJ5Zy_w4ITNBqx45a48TeFxQNieA&oe=649ED54C",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348864774_981423236347372_7737918802403382387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=a6OemIGsvjAAX8v6uuQ&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDtc2oCQd2eoadoZDLLikAJ1lc9g2apg0BzUTiKPrQQ2g&oe=649F3E21",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348601913_798985154736755_2067808763436854483_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=hyqwlbQ9nsgAX8fdZ_-&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDt1AGoBUnoz8fOW1Q4eHUiomVs_Plbh9BKiT8OP2dtWA&oe=649F5D85",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348565262_144478091910086_3661217094923316968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=FjTVbzCoCiIAX_SM7k-&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDpM6V-9GcJDAIFKn1LbHHZ4n2KGV5KVoVmLcXc_awydw&oe=649EF4AE",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348595880_600262785212782_6348175243450829675_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ii9EmI1BaPEAX8qz8Hb&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB7lWotROfwIXQ47iUZnUb2VH-ZKEb1OWAmEvIPjIkbKA&oe=649EF369",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348591211_6085450568226863_3029981574680848622_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=87STozP-hj0AX-qq8wO&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDvz0MPfbX9fw18WXIfIP7OXoE5M5-ANl76n8mkrmJzUQ&oe=649F11AA",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348441772_625787676129239_6341236696944988236_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=xqX2N8rFGpUAX8c4Rj5&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBbe_Udv1dMGGWzsn5Cp1QuCmyKIDOgVAAFdddaTgWmaQ&oe=649F6977",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348575284_194323076845927_851697444930498556_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=TmorrYM9uH8AX-tmtoe&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDsntD7KTHoJZFiF4S2OkmJG0isjipbtaCWws95dlIZ3Q&oe=649FD931",
  "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/348447054_751536816651924_3105047077787187525_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=CiQAa374g1QAX__K4G_&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAofUddo6hYnQpniMtjp9AW3qwAYe-1VNaGZMrY0gIAWg&oe=64A03278",
];
const galleryContainer = document.getElementById("gallery");
const showMoreButton = document.getElementById("showMoreButton");
let currentIndex = 0;
let itemsPerPage = 4;

function showItems() {
  const endIndex = Math.min(currentIndex + itemsPerPage, galleryImg.length);
  const shuffledImages = shuffleArray(galleryImg); // Shuffle the array of images
  for (let i = currentIndex; i < endIndex; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = shuffledImages[i];
    div.appendChild(img);
    galleryContainer.appendChild(div);
  }
  currentIndex += itemsPerPage;

  // 모든 이미지를 로드한 경우, 더 이상 버튼을 표시하지 않습니다
  if (currentIndex >= galleryImg.length) {
    showMoreButton.style.display = "none";
  }
}

function adjustItemsPerPage() {
  if (window.innerWidth < 768) {
    itemsPerPage = 2;
  } else if (window.innerWidth < 960) {
    itemsPerPage = 3;
  } else if (window.innerWidth < 1024) {
    itemsPerPage = 4;
  } else if (window.innerWidth < 1280) {
    itemsPerPage = 5;
  } else {
    itemsPerPage = 6;
  }
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

showMoreButton.addEventListener("click", () => {
  showItems();
});

window.addEventListener("resize", () => {
  adjustItemsPerPage();
});

adjustItemsPerPage();
showItems();
