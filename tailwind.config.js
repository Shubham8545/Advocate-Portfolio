module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}','./UIComponents/***/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    extend: {
      colors:{        
          titleColor: 'var(--title-color)',        
          descColor: 'var(--desc-color)',       
          descDarkColor: 'var(--descDark-Color)',        
      },
      fontFamily: {
        monumentLight: ['Monument Extended Light', 'sans-serif'],
        monumentBold:['Monument Extended Bold', 'sans-serif'],
        montserrat:['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
     