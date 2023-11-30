import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';
import { useRouter } from 'expo-router';

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActivejobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hayo Bozo</Text>
        <Text style={styles.welcomeMessage}>Pronađi tvoj savršen poso</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <FlatList 
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActivejobType(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )} 
            keyExtractor={item => item} //dohvata unique key
            contentContainerStyle={{ columnGap: SIZES.small}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome