import { View, Text, StyleSheet, TouchableOpacity, Animated,ScrollView, Image } from 'react-native'
import React, { useRef, useState } from 'react'

const FrontLayout = () => {
    const [showMenu, setShowMenu] = useState(false);
    const moveToRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    console.log("working", scale)
    console.log("working2", moveToRight)
    return (
        <Animated.View style={{

            flex: 1,
            backgroundColor: "#fff",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            transform: [{ scaleY: scale }, { translateX: moveToRight }]
        }}>
            {/* //TopView// */}

            <View style={styles.container}>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        marginHorizontal: 10
                    }}
                    onPress={() => {
                        console.log("pressed")
                        Animated.timing(scale, {
                            toValue: showMenu ? 1 : 0.88,
                            duration: 150,
                            useNativeDriver: true,
                        }).start();
                        Animated.timing(moveToRight, {
                            toValue: showMenu ? 0 : 300,
                            duration: 150,
                            useNativeDriver: true,
                        }).start();
                        setShowMenu(!showMenu);
                    }}
                >
                    <Image
                        style={{
                            width: 32,
                            height: 32,
                            tintColor:"#fff"
                        }}
                        source={require("../assets/icons8-menu-24.png")}
                    />
                </TouchableOpacity>
                <View style={styles.txtsView}>
                    <Text style={styles.text1}>
                        Home
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.5}

                    >

                        <Text style={styles.text2}>
                            Al Hamra Garden Apartment
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgView}>
                    <TouchableOpacity
                        activeOpacity={0.5}

                    >
                        <Image
                            style={styles.img1}
                            source={require("../assets/icons8-favorite-50.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <Image
                            style={styles.img2}
                            source={require("../assets/icons8-shopping-bag-32.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* //SearchView// */}

            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    activeOpacity={1}
                >
                    <View style={styles.insideView}>
                        <Image
                            style={styles.searchIcon}
                            source={require("../assets/icons8-search-50.png")}
                        />
                        <Text style={styles.txt}>
                            Search for shops and restaurants
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* //ItemsView// */}
<ScrollView>

            <View style={styles.container1}>


                {/* //1st colomn// */}
                <View style={{
                }}>
                    {/* //1st box// */}
                    <TouchableOpacity
                        activeOpacity={0.8}

                    >
                        <View style={styles.container3}>
                            <View style={styles.con1txt1View}>
                                <Text style={{
                                    fontSize: 24,
                                    color: "black",
                                    fontWeight: "bold"
                                }}>
                                    Food{"\n"}delivery
                                </Text>
                            </View>
                            <View style={styles.con1txt2View}>
                                <Text style={styles.txt2}>
                                    Order from your{"\n"}favourite restaurants...
                                </Text>
                            </View>
                            <View style={styles.conImgView}>
                                <Image
                                    style={styles.img}
                                    source={require("../assets/fp-1.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* //2nd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        padding: 15,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: "row"
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        Dine-in
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Eat out and{"\n"}save 25%
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 36,
                                        borderRadius: 10,
                                        marginVertical: 13,

                                    }}
                                    source={require("../assets/fp-4.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>


                {/* //2nd colomn// */}
                <View style={{
                }}>


                    {/* //1st box// */}
                    <TouchableOpacity

                        activeOpacity={0.8}
                    >
                        <View style={{
                            backgroundColor: "#fff",
                            height: 125,
                            width: 180,
                            borderRadius: 10,
                            marginHorizontal: 20,
                            padding: 12
                        }}>
                            <View style={styles.con1txt1View}>
                                <Text style={styles.txt1}>
                                    pandamart
                                </Text>
                            </View>
                            <View style={styles.con1txt2View}>
                                <Text style={styles.txt2}>
                                    convenience, delivere...
                                </Text>
                            </View>
                            <View style={{
                                // backgroundColor:"red"
                            }}>
                                <Image
                                    style={{
                                        width: 72,
                                        height: 72,
                                        marginHorizontal: 85,
                                        resizeMode: "contain"
                                    }}
                                    source={require("../assets/fp-2.png")}
                                />
                            </View>
                        </View>

                    </TouchableOpacity>
                    {/* //2nd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        borderRadius: 10,
                        marginTop: 18,
                        marginHorizontal: 20

                    }}>
                        <View style={{
                            flexDirection: "row",
                            padding: 12
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        pandamall
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Everyday{"\n"}essentials
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 22,
                                        borderRadius: 10,
                                        marginVertical: 15,

                                    }}
                                    source={require("../assets/fp-5.png")}
                                />
                            </View>
                        </View>
                    </View>
</View>


                    {/* //3rd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        borderRadius: 10,
                        marginTop: 18,
                        marginHorizontal: 20

                    }}>

                        <View style={{
                            flexDirection: "row",
                            padding: 12
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        Pick-up
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Enjoy up to{"\n"}50% off and...
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 30,
                                        borderRadius: 10,
                                        marginVertical: 15,

                                    }}
                                    source={require("../assets/fp-3.png")}
                                />
                            </View>
                        </View>
                    </View>

            
                </View>

                <View>
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: 20,
                    marginVertical: 15,
                }}>
                    Your Restaurants
                </Text>
            </View>
            <ScrollView style={{
                flexDirection: "row",
                // backgroundColor: "red",
                height: 250,
                padding: 15,


            }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >



                {/* //1st Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>

                        <Image
                            style={{
                                width: 260,
                                height: 160,
                                resizeMode: "contain",
                                borderRadius: 10
                            }}
                            source={require("../assets/fp-6.png")}
                        />
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Pizza Point - Gulshan e Iqbal
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$ - Pizza, Italian, Sandwiches
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 75 delivery fee
                        </Text>
                    </View>
                </View>


                {/* //2nd Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300,
                    marginHorizontal: 15
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                        >

                            <Image
                                style={{
                                    width: 260,
                                    height: 160,
                                    resizeMode: "contain",
                                    borderRadius: 10
                                }}
                                source={require("../assets/fp-7.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Pizza Nation - Gulshan
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$$ - Pizza
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 65 delivery fee
                        </Text>
                    </View>
                </View>


                {/* //3rd Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300,
                    marginHorizontal: 5,
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>

                        <Image
                            style={{
                                width: 260,
                                height: 160,
                                resizeMode: "contain",
                                borderRadius: 10
                            }}
                            source={require("../assets/fp-8.png")}
                        />
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Red Apple - Gulshan
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$ - Fast Food, Pakistan Chowk
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 65 delivery fee
                        </Text>
                    </View>
                </View>
            </ScrollView>
</ScrollView>

        </Animated.View>
    )
}
const styles = StyleSheet.create({
    container2: {
        flexDirection: "row",
        backgroundColor: "deeppink",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    touchableOpacity: {
        flexDirection: "row",
    },
    searchIcon: {
        width: 28,
        height: 28,
        tintColor: "grey"
    },
    insideView: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        width: "95%",
        height: 45,
        paddingLeft: 10,
        marginLeft: 10
    },
    txt: {
        fontSize: 16,
        marginHorizontal: 10,
        color: "grey",
    },


    container: {
        flexDirection: "row",
        backgroundColor: "deeppink",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        paddingHorizontal: 20
    },
    imgView: {
        flexDirection: "row",
        alignItems: "center",
        width: 120,
        justifyContent: "flex-end",

    },
    drawerImg: {
        width: 28,
        height: 28,
        tintColor: "#fff",
    },
    img1: {
        width: 32,
        height: 32,
        tintColor: "#fff"
    },
    img2: {
        width: 28,
        height: 28,
        tintColor: "#fff",
        marginHorizontal: 5,

    },
    text1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",

    },
    text2: {
        color: "#fff"
    },
    container1: {
        backgroundColor: "whitesmoke",
        height: 360,
        flexDirection: "row",
        padding: 20
    },
    container3: {
        backgroundColor: "#fff",
        height: 220,
        width: 180,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    con1txt1View: {

    },
    txt1: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    txt2: {
        color: "black",
        fontSize: 12
    },
    con1txt2View: {

    },
    conImgView: {
        // backgroundColor: "red",
        height: 100,
    },
    img: {
        marginHorizontal: 45,
        width: 120,
        height: 100,
        resizeMode: "contain",


    },

})
export default FrontLayout;