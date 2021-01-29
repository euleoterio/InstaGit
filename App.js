import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InstaGitHubCard({ githubUser }) {
  const [liked, setLikeState] = useState(false);
  return (
    <View>
      {/* InstaCardHeader */}
      <View style={styles.instaCardHeader}>
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `http://github.com/${githubUser}.png`,
          }}
        />
        <Text>{githubUser}</Text>
      </View>
      {/* InstaCardHeader */}

      {/* InstaCardImage */}
      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={{
          uri: `http://github.com/${githubUser}.png`,
        }}
      />
      {/* InstaCardImage */}

      {/* Footer  */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && (
            <Ionicons name="ios-heart-outline" size={24} color="black" />
          )}
          {!liked && <Ionicons name="ios-heart" size={24} color="red" />}
        </TouchableOpacity>
      </View>
      {/* Footer  */}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {[
          'euleoterio',
          'filipedeschamps',
          'leandropaz',
          'micaelomota',
          'omariosouto',
          'vweberfroes',
          'gabrielfroes',
          'peas',
        ].map((githubUser) => (
          <InstaGitHubCard key={githubUser} githubUser={githubUser} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  instaCardHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
});
