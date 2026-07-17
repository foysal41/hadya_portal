
export const layout ={
  section: {
    gap: 'space-y-5 space-x-5'
  },
  sectionDirection:{
    flexCenter: 'flex flex-col justify-center items-center gap-2 md:gap-4 text-center',
    gridCenter: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
  }
    
}

export const style = {
  text: {
    lg: "text-lg md:text-xl text-main text-font",
    md: "text-base md:text-lg text-main text-font",
    sm: "text-sm md:text-base text-main text-font",
    xs: "text-xs md:text-sm text-main text-font",
    muted: "text-sm md:text-base text-muted text-font",
  },

  span:{
    font: "text-sm uppercase",
  },
  heading: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold heading-font",
    h2: "text-3xl md:text-4xl lg:text-5xl font-semibold heading-font",
    h3: "text-2xl md:text-3xl lg:text-3xl font-semibold heading-font",
    h4: "text-xl md:text-2xl lg:text-3xl font-semibold heading-font",
  },

  button: {
    primary:
      "cursor-pointer inline-flex items-center justify-center rounded-full bg-primary text-white text-sm md:text-base font-medium text-font px-5 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-accent",

    secondary:
      "cursor-pointer inline-flex items-center justify-center rounded-full border border-primary text-primary text-sm md:text-base font-medium text-font px-5 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-primary hover:text-white",

    outline:
      "cursor-pointer inline-flex items-center justify-center rounded-full border border-main text-main text-sm md:text-base font-medium text-font px-5 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-main hover:text-white",

    icon:
      "cursor-pointer inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm md:text-base font-medium text-font px-5 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-accent",
  
  },
};





export const advance ={
  section: {
    padding:"py-12.5 px-5 md:py-25 "
  }
}