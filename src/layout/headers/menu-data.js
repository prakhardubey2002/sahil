import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/cleaning_eqiupments", title: "Cleaning Equipments" },
      { link: "/green_chemicals", title: "Green Chemicals" }, 
      { link: "/nano_coating", title: "Nano Coating" },
      { link: "/floor_coatings", title: "Floor Coatings" },
      { link: "/food_industry", title: "Food industry Cleaning Tools" },
      { link: "janitorials", title: "Janitorials"},
      { link: "bathroom_solutions", title: "Bathroom Solutions"},
      { link: "microfiber_cleaning_products", title: "Microfiber Cleaning products"},
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Sustainibility",
    link: "/blog",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
