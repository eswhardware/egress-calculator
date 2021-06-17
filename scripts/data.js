const systemInfo = {

    "ES-EL100": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 6.06,
                                        widthDiscount: 5.625,
                                        widthDivider: 1,
                                        heightDivider: 2,},
                                        
                         highSill: {heightDiscount: 6.248,
                                    widthDiscount: 5.625,
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 7.152,
                                    hSillDiscount: 7.527,
                                   widthDiscount: 5.625,
                                   widthDivider: 1,
                                   heightDivider: 2}} 

    },

    "ES-H340": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 7.75,
                                        widthDiscount: 6.375,
                                        widthDivider: 1,
                                        heightDivider: 2,},
                                        
                         leg: {heightDiscount: 8.25,
                                    widthDiscount: 7.375,
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 7.875,
                                    hSillDiscount: 7.875,
                                   widthDiscount: 6.375,
                                   widthDivider: 1,
                                   heightDivider: 1}} 

    },

    "ES-1000": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 6.5625,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2,},
                                        
                         highSill: {heightDiscount: 6.8125,
                                    widthDiscount: 6,
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 8.313,
                                   hSillDiscount: 8.94,
                                   widthDiscount: 6,
                                   
                                   widthDivider: 1,
                                   heightDivider: 2}} 
    },

    "ES-1050": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {standardSill: {heightDiscount: 5.9375,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2},
                                        
                         highSill: {heightDiscount: 6.25,
                                    widthDiscount: 6,                                    
                                    widthDivider: 1,
                                    heightDivider: 2,},
                                    
                            oriel:{sSillDiscount: 8.313,
                                hSillDiscount: 8.94,
                                widthDiscount: 6,                                
                                widthDivider: 1,
                                heightDivider: 2}}  
    },

    "ES-1100": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {highSill: {heightDiscount: 6.8125,
                                        widthDiscount: 6,
                                        widthDivider: 1,
                                        heightDivider: 2},
                              
                                oriel:{sSillDiscount: 0,
                                    hSillDiscount: 8.94,
                                    widthDiscount: 6,                                    
                                    widthDivider: 1,
                                    heightDivider: 2}}  
    },

    "ES-1150": {
        systemType: "Single Hung Window",
        egress: true,
        configurations: {highSill: {heightDiscount: 6.25,
                                        widthDiscount: 6,                                        
                                        widthDivider: 1,
                                        heightDivider: 2},
                              
                            oriel:{sSillDiscount: 0,
                                hSillDiscount: 8.94,
                                widthDiscount: 6,                                
                                widthDivider: 1,
                                heightDivider: 2}}  
    },

    "ES-EL200": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO": {heightDiscount: 6.125,
                                   widthDiscount: 8.25,                        
                                   widthDivider: 2,
                                   heightDivider: 1},                                   
                            "XOX": {heightDiscount: 6.125,
                                    widthDiscount: 3.875,                                    
                                    widthDivider: 3,
                                    heightDivider: 1}       
                        }                        
    },

    "ES-2000": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 6.8125,
                                   widthDiscount: 4.5625,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "OX/XO - HIGH SILL": {heightDiscount: 7.25,
                                    widthDiscount: 4.5625,
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX - STD SILL": {heightDiscount: 6.8125,
                                    widthDiscount: 5.1875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},
                                    
                        "XOX - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 5.1875,                                   
                            widthDivider: 3,
                            heightDivider: 1},

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 6.8125,
                            widthDiscount: 2.625,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                    
                        "XOX [1/4-1/2-1/4] - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.625,                                   
                            widthDivider: 4,
                            heightDivider: 1}
                        }                        
    },

    "ES-2050": {
        systemType: "Horizontal Sliding Window",  
        egress: true,     
        configurations: {"OX/XO - STD SILL": {heightDiscount: 6.8125,
                                   widthDiscount: 4.8125,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "OX/XO - HIGH SILL": {heightDiscount: 7.25,
                                    widthDiscount: 4.8125,
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX - STD SILL": {heightDiscount: 6.8125,
                                    widthDiscount: 5.875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},
                                    
                        "XOX - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 5.875,                                   
                            widthDivider: 3,
                            heightDivider: 1},

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 6.8125,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                    
                        "XOX [1/4-1/2-1/4] - HIGH SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1}
                        }                        
    },

    "ES-2100": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 7.25,
                                                widthDiscount: 4.5625,                    
                                                widthDivider: 2,
                                                heightDivider: 1},    

                        "XOX - STD SILL": {heightDiscount: 7.25,
                                            widthDiscount: 5.1875,                                   
                                            widthDivider: 3,
                                            heightDivider: 1},                                

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 7.25,
                                                            widthDiscount: 2.625,                                   
                                                            widthDivider: 4,
                                                            heightDivider: 1},
                                
                        }                        
    },

    "ES-2150": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STD SILL": {heightDiscount: 7.25,
                                   widthDiscount: 4.8125,                    
                                   widthDivider: 2,
                                   heightDivider: 1},    

                        "XOX - STD SILL": {heightDiscount: 7.25,
                                    widthDiscount: 5.875,                                   
                                    widthDivider: 3,
                                    heightDivider: 1},                                

                        "XOX [1/4-1/2-1/4] - STD SILL": {heightDiscount: 7.25,
                            widthDiscount: 2.375,                                   
                            widthDivider: 4,
                            heightDivider: 1},
                                
                        }                        
    },

    "ES-4000": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO": {heightDiscount: 1,
                                   widthDiscount: 5.5,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 
                                   
                        "XX": {heightDiscount: 1,
                                    widthDiscount: 7.75,                    
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "OXO": {heightDiscount: 1,
                            widthDiscount: 5.9583,                    
                            widthDivider: 3,
                            heightDivider: 1},    
                        
                        "OXXO": {heightDiscount: 1,
                            widthDiscount: 10.875,                    
                            widthDivider: 2,
                            heightDivider: 1}                                
                        }                        
    },

    "ES-6000": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO": {heightDiscount: 1,
                                   widthDiscount: 6,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 
                                   
                        "XX": {heightDiscount: 1,
                                    widthDiscount: 9.3125,                    
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "OXO": {heightDiscount: 1,
                            widthDiscount: 6.125,                    
                            widthDivider: 3,
                            heightDivider: 1},    
                        
                        "OXXO": {heightDiscount: 1,
                            widthDiscount: -10.875,                    
                            widthDivider: 4,
                            heightDivider: 1}                                
                        }                        
    },

    "ES-6500": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO - INTUITION HANDLE": {heightDiscount: 1,
                                   widthDiscount: 8.75,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 

                        "OX/XO - INVOLUTE HANDLE": {heightDiscount: 1,
                                    widthDiscount: 10.75,                    
                                    widthDivider: 2,
                                    heightDivider: 1},
         
                        "XOX - INTUITION HANDLE": {heightDiscount: 1,
                            widthDiscount: 8.3125,                    
                            widthDivider: 3,
                            heightDivider: 1},
                            
                        "XOX - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: 10.375,                    
                            widthDivider: 3,
                            heightDivider: 1},  
                        
                        "OXXO - INTUITION HANDLE": {heightDiscount: 1,
                            widthDiscount: 15.5,                    
                            widthDivider: 2,
                            heightDivider: 1},                            
                    
                        "OXXO - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: -17.5625,                    
                            widthDivider: 2,
                            heightDivider: 1}
                        }                        
    },

    "ES-EL400": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO": {heightDiscount: 1,
                                   widthDiscount: 7.3125,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 
                                   
                        "XX": {heightDiscount: 1,
                                    widthDiscount: 9.5938,                    
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "OXO": {heightDiscount: 1,
                            widthDiscount: 9.75,                    
                            widthDivider: 3,
                            heightDivider: 1},    
                        
                        "OXXO": {heightDiscount: 1,
                            widthDiscount: 12.3125,                    
                            widthDivider: 2,
                            heightDivider: 1}                                
                        }                        
    },

    "ES-SW340": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO - STANDARD SILL": {heightDiscount: 7.75,
                                   widthDiscount: 6.75,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 
                                   
                        "OX/XO - FLANGE": {heightDiscount: 8.75,
                                    widthDiscount: 7.25,                    
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX": {heightDiscount: 6.8125,
                            widthDiscount: 5.1875,                    
                            widthDivider: 3,
                            heightDivider: 1}                                    
                        }                        
    },

    "RC-HR2600": {
        systemType: "Horizontal Sliding Window",
        egress: true,       
        configurations: {"OX/XO": {heightDiscount: 5.25,
                                   widthDiscount: 8.936,                    
                                   widthDivider: 2,
                                   heightDivider: 1}, 
                                   
                        "XOX": {heightDiscount: 5.25,
                                    widthDiscount: 23.5,                    
                                    widthDivider: 2,
                                    heightDivider: 1},

                        "XOX - UNEQUAL": {heightDiscount: 5.25,
                            widthDiscount: 16.979,                    
                            widthDivider: 3,
                            heightDivider: 1}                                    
                        }                        
    },

    "RC-2400ST": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO - INVOLUTE HANDLE": {heightDiscount: 1,
                                    widthDiscount: 8,                    
                                    widthDivider: 2,
                                    heightDivider: 1},
         
                        "OXO - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: 7.5,                    
                            widthDivider: 3,
                            heightDivider: 1},  
                   
                        "OXXO - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: 13.8125,                    
                            widthDivider: 2,
                            heightDivider: 1}
                        }                        
    },

    "RC-DM12": {
        systemType: "Horizontal Sliding Window",
        accessibility: true,       
        configurations: {"OX/XO - INVOLUTE HANDLE": {heightDiscount: 1,
                                    widthDiscount: 8.0625,                    
                                    widthDivider: 2,
                                    heightDivider: 1},
         
                        "OXO - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: 9.5625,                    
                            widthDivider: 3,
                            heightDivider: 1},  
                   
                        "OXXO - INVOLUTE HANDLE": {heightDiscount: 1,
                            widthDiscount: 12.875,                    
                            widthDivider: 2,
                            heightDivider: 1},

                        "OX/XO - CREST HANDLE": {heightDiscount: 1,
                            widthDiscount: 7,                    
                            widthDivider: 2,
                            heightDivider: 1},
     
                        "OXO - CREST HANDLE": {heightDiscount: 1,
                            widthDiscount: 6.5,                    
                            widthDivider: 3,
                            heightDivider: 1},  
                
                        "OXXO - CREST HANDLE": {heightDiscount: 1,
                            widthDiscount: 11.8125,                    
                            widthDivider: 2,
                            heightDivider: 1}
                            }                        
    },

    "ES-5000": {
        systemType: "Project Window",
        egress: true,
        configurations: {"X": {heightDiscount: 6,
                               widthDiscount: 7.0625,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 6,
                               widthDiscount: 6.4375,
                               widthDivider: 2,
                               heightDivider: 1}}  
    },

    "ES-P252": {
        systemType: "Project Window",
        egress: true,
        configurations: {"CASEMENT X": {heightDiscount: 4.6875,
                               widthDiscount: 6,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "RECEPTOR X": {heightDiscount: 9.375,
                               widthDiscount: 9.9375,
                               widthDivider: 1,
                               heightDivider: 1},
                        
                        "CASEMENT FLANGE X": {heightDiscount: 5.6875,
                                widthDiscount: 7,
                                widthDivider: 1,
                                heightDivider: 1},

                        "CASEMENT XX": {heightDiscount: 4.6875,
                            widthDiscount: 5.75,
                            widthDivider: 2,
                            heightDivider: 1},
                    
                        "RECEPTOR XX": {heightDiscount: 9.375,
                            widthDiscount: 7.6875,
                            widthDivider: 2,
                            heightDivider: 1},
                        
                        "CASEMENT FLANGE XX": {heightDiscount: 5.6875,
                                widthDiscount: 6.25,
                                widthDivider: 2,
                                heightDivider: 1},
                            }  
    },

    "ES-3000": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 6,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 4.250,
                               widthDivider: 2,
                               heightDivider: 1}
                        }  
    },

    "ES-9000": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 8.375,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 6,
                               widthDivider: 2,
                               heightDivider: 1},

                        "X - ES-8000 FRAME": {heightDiscount: 0,
                        widthDiscount: 6.8775,
                        widthDivider: 1,
                        heightDivider: 1},
                     
                         "XX - ES-8000 FRAME": {heightDiscount: 0,
                                widthDiscount: 5.25,
                                widthDivider: 2,
                                heightDivider: 1}}  
    },

    "ES-9100": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 5.25,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 4.375,
                               widthDivider: 2,
                               heightDivider: 1}
                        }  
    },

    "ES-21": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 6.5,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 4.5,
                               widthDivider: 2,
                               heightDivider: 1}
                        }  
    },

    "ES-35": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 6.875,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX - WITH ASTRAGAL": {heightDiscount: 0,
                               widthDiscount: 4.375,
                               widthDivider: 2,
                               heightDivider: 1},
                        
                        "XX - WITH ASTRAGAL": {heightDiscount: 0,
                            widthDiscount: 4.875,
                            widthDivider: 2,
                            heightDivider: 1}
                     } 
    },

    "ES-46T": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 7.213,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 6,
                               widthDivider: 2,
                               heightDivider: 1}
                        }  
    },

    "ES-EL300": {
        systemType: "Swing Door",
        accessibility: true,
        configurations: {"X": {heightDiscount: 0,
                               widthDiscount: 6.5,
                               widthDivider: 1,
                               heightDivider: 1},
                    
                        "XX": {heightDiscount: 0,
                               widthDiscount: 4.625,
                               widthDivider: 2,
                               heightDivider: 1}
                        }  
    }
}

// module.exports =  systemInfo;