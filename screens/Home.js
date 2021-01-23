import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
    FlatList,
  StatusBar
} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import {
  fiveFeetsApart,
  novemberRain,
  theOutsider,
  theVegetarian,
  myBooksData,
} from '../api/data';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [fiveFeetsApart, novemberRain, theVegetarian],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [theOutsider],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [theVegetarian],
    },
  ];

  const profileData = {
    name: 'Glover',
    point: 200,
  };

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const renderHeader = (profile) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Good Morning</Text>
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {profile.name}
            </Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => console.log('Points')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {' '}
              {profile.point} points
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderButtonSection = () => {
    return (
      <View style={{flex: 1, padding: SIZES.padding, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Claim')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}

          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Get Point')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('My Card')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMyBookSection = (myBooks) => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index === 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
              onPress={ () => navigation.navigate( "BookDetail", {
              book: item
          })}>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                width: 20,
                marginLeft: SIZES.radius,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>My Book</Text>

          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}>
              See More
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const renderCategoryHeader = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory === item.id && (
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory !== item.id && (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };
    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  };

  const renderCategoryData = () => {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory,
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View style={{marginVertical: SIZES.base}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
                  onPress={ () => navigation.navigate( "BookDetail", {
                book: item
            })}>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View style={{flex: 1, marginLeft: SIZES.radius}}>
              {/* Book Name and Author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text style={{...FONTS.h3, color: COLORS.lightGray}}>
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{width: 20, height: 20, tintColor: COLORS.lightGray}}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </Text>
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{width: 20, height: 20, tintColor: COLORS.lightGray}}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightGreen}}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightRed}}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <Text style={{...FONTS.body3, color: COLORS.lightBlue}}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
              </TouchableOpacity>
              {/* Bookmark Button */ }
              <TouchableOpacity style={{position: 'absolute', top: 5, right: 15}} onPress={() => console.log("Bookmark")}>
                  <Image source={ icons.bookmark_icon }
                      resizeMode="contain"
                      style={{height: 25, width: 25, tintColor: COLORS.lightGray}}
                  />
              </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding}}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Header Section */}
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body Section */}
      <ScrollView style={{marginTop: SIZES.radius}}>
        {/* Book Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>

          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
