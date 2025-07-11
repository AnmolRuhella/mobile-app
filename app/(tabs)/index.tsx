import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:24 }}>🏠 Home Screen</Text>
      {/* Example navigation to details */}
      <Link href="/(details)/profiledetail" asChild>
        <Button title="Go to Details" />
      </Link>
    </View>
  );
}
