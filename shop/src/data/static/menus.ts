export const menu = [
  {
    id: 1,
    path: "/",
    label: "menu-brand",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-all"
      },
      {
        id: 2,
        path: "/shahama?brand=shahama",
        label: "menu-shahama"
      },
      {
        id: 3,
        path: "/samase?brand=samase",
        label: "menu-samase"
      },
    ]
  },
  {
    id: 2,
    path: "/search?category=man",
    label: "menu-men-wear",
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            path: "/search?brand=samase",
            label: "menu-samase",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=kemko",
                label: "menu-kemko"
              },
              {
                id: 2,
                path: "/search?category=kurta",
                label: "menu-kurta"
              },
              {
                id: 3,
                path: "/search?category=koku",
                label: "menu-koku"
              },
              {
                id: 4,
                path: "/search?brand=samase&category=jubbah",
                label: "menu-saudi-jubbah"
              }
            ]
          },
          {
            id: 2,
            path: "/search?category=kemko",
            label: "menu-koko"
          },
          {
            id: 3,
            path: "/search?category=jubbah",
            label: "menu-gamis"
          }
        ]
      },
      {
        id: 2,
        columnItems: [
          {
            id: 1,
            path: "/search?brand=shahama",
            label: "menu-shahama",
            columnItemItems: [
              {
                id: 1,
                path: "/search?brand=shahama&category=jubbah",
                label: "menu-jubbah"
              },
              {
                id: 2,
                path: "/search?category=jubbah",
                label: "menu-jubbah-premium"
              }
            ]
          },
          {
            id: 2,
            path: "#",
            label: "menu-recomended-size",
            columnItemItems: [
              {
                id: 1,
                path: "/search?variations=S",
                label: "menu-s"
              },
              {
                id: 2,
                path: "/search?variations=M",
                label: "menu-m"
              },
              {
                id: 3,
                path: "/search?variations=L",
                label: "menu-l"
              },
              {
                id: 4,
                path: "/search?variations=XL",
                label: "menu-xl"
              },
              {
                id: 4,
                path: "/search?variations=XXL",
                label: "menu-xxl"
              }
            ]
          },
        ]
      },
      {
        id: 3,
        columnItems: [
          {
            id: 1,
            path: "/search?variations=women",
            label: "menu-color",
            columnItemItems: [
              {
                id: 1,
                path: "/search?variations=white",
                label: "menu-white"
              },
              {
                id: 2,
                path: "/search?variations=light-grey",
                label: "menu-light-grey"
              },
              {
                id: 3,
                path: "/search?variations=navy",
                label: "menu-navy"
              },
              {
                id: 4,
                path: "/search?variations=blue",
                label: "menu-blue"
              },
              {
                id: 5,
                path: "/search?variations=army",
                label: "menu-army"
              },
              {
                id: 6,
                path: "/search?variations=brown",
                label: "menu-brown"
              },
              {
                id: 7,
                path: "/search?variations=cream",
                label: "menu-cream"
              },
              {
                id: 8,
                path: "/search?variations=black",
                label: "menu-black"
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    path: "/search?category=casual",
    label: "menu-type-clothes",
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            path: "/search?category=casual",
            label: "menu-casual",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=casual%2Ckemko",
                label: "menu-casual-kemko"
              },
              {
                id: 2,
                path: "/search?category=casual%2Ckoku",
                label: "menu-casual-koku"
              },
              {
                id: 2,
                path: "/search?category=casual%2Ckurta",
                label: "menu-casual-kurta"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        columnItems: [
          {
            id: 1,
            path: "/search?category=man",
            label: "menu-formal",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=kemko",
                label: "menu-formal-kemko"
              },
              {
                id: 2,
                path: "/search?category=koku",
                label: "menu-formal-koku"
              },
              {
                id: 2,
                path: "/search?category=kurta",
                label: "menu-formal-kurta"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        columnItems: [
          {
            id: 1,
            path: "/search?category=premium",
            label: "menu-premium",
            columnItemItems: [
              {
                id: 1,
                path: "/search?brand=samase&category=kemko",
                label: "menu-premium-kemko"
              },
              {
                id: 2,
                path: "/search?brand=samase&category=koku",
                label: "menu-premium-koku"
              },
              {
                id: 3,
                path: "/search?category=kurta",
                label: "menu-premium-kurta"
              },
              {
                id: 4,
                path: "/search?category=jubbah",
                label: "menu-premium-jubbah"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        columnItems: [
          {
            id: 1,
            path: "/search?category=limited",
            label: "menu-limited",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=limited",
                label: "menu-limited-kemko"
              },
              {
                id: 2,
                path: "/search?category=jubbah",
                label: "menu-limited-jubbah"
              },
            ]
          }
        ]
      },
      {
        id: 5,
        columnItems: [
          {
            id: 1,
            path: "/search?category=lengan-panjang%2Clengan-pendek",
            label: "menu-lengan",
            columnItemItems: [
              {
                id: 1,
                path: "/search?category=lengan-panjang",
                label: "menu-lengan-panjang"
              },
              {
                id: 2,
                path: "/search?category=lengan-pendek",
                label: "menu-lengan-pendek"
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    path: "/search",
    label: "menu-shop"
  },
  {
    id: 7,
    path: "/",
    label: "menu-pages",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-users",
        subMenu: [
          {
            id: 1,
            path: "/my-account",
            label: "menu-my-account"
          },
          {
            id: 2,
            path: "/signin",
            label: "menu-sign-in"
          },
          {
            id: 3,
            path: "/signup",
            label: "menu-sign-up"
          },
          {
            id: 4,
            path: "/forget-password",
            label: "menu-forget-password"
          }
        ]
      },
      {
        id: 2,
        path: "/faq",
        label: "menu-faq"
      },
      {
        id: 3,
        path: "/privacy",
        label: "menu-privacy-policy"
      },
      {
        id: 4,
        path: "/terms",
        label: "menu-terms-condition"
      },
      {
        id: 5,
        path: "/contact-us",
        label: "menu-contact-us"
      },
      {
        id: 6,
        path: "/checkout",
        label: "menu-checkout"
      },
      {
        id: 7,
        path: "/collections/on-sale",
        label: "menu-collection"
      },
      {
        id: 8,
        path: "/search",
        label: "menu-category"
      },
      {
        id: 9,
        path: "/my-account/orders",
        label: "menu-order"
      },
      {
        id: 10,
        path: "/404",
        label: "menu-404"
      }
    ]
  }
];

export const mobileMenu = [
  {
    id: 1,
    path: "/",
    label: "menu-demos",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-modern"
      },
      {
        id: 2,
        path: "/shahama",
        label: "menu-shahama"
      },
      {
        id: 3,
        path: "/samase",
        label: "menu-samase"
      }
    ]
  },
  {
    id: 2,
    path: "/search?category=men",
    label: "menu-men-wear",
    subMenu: [
      {
        id: 1,
        path: "/search?category=men",
        label: "menu-samase",
        subMenu: [
          {
            id: 1,
            path: "/search?category=kemko",
            label: "menu-kemko"
          },
          {
            id: 2,
            path: "/search?category=kurta",
            label: "menu-kurta"
          },
          {
            id: 3,
            path: "/search?category=koku",
            label: "menu-koku"
          },
          {
            id: 4,
            path: "/search?category=jubbah",
            label: "menu-saudi-jubbah"
          }
        ]
      },
    ]
  },
  {
    id: 5,
    path: "/search",
    label: "menu-search"
  },
  {
    id: 7,
    path: "/",
    label: "menu-pages",
    subMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-users",
        subMenu: [
          {
            id: 1,
            path: "/my-account",
            label: "menu-my-account"
          },
          {
            id: 2,
            path: "/signin",
            label: "menu-sign-in"
          },
          {
            id: 3,
            path: "/signup",
            label: "menu-sign-up"
          },
          {
            id: 4,
            path: "/forget-password",
            label: "menu-forget-password"
          }
        ]
      },
      {
        id: 2,
        path: "/faq",
        label: "menu-faq"
      },
      {
        id: 3,
        path: "/privacy",
        label: "menu-privacy-policy"
      },
      {
        id: 4,
        path: "/terms",
        label: "menu-terms-condition"
      },
      {
        id: 5,
        path: "/contact-us",
        label: "menu-contact-us"
      },
      {
        id: 6,
        path: "/checkout",
        label: "menu-checkout"
      },
      {
        id: 7,
        path: "/collections/on-sale",
        label: "menu-collection"
      },
      {
        id: 8,
        path: "/search",
        label: "menu-category"
      },
      {
        id: 9,
        path: "/my-account/orders",
        label: "menu-order"
      },
      {
        id: 10,
        path: "/404",
        label: "menu-404"
      }
    ]
  }
]