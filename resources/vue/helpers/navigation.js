const navigationJson = import.meta.glob('/modules/**/navigation.json', { eager: true })
const navigation = [];

for (const file in navigationJson) {
    let json = navigationJson[file].default;
    json.forEach(section => {
        navigation.push(section);
    })
}

navigation.sort((a, b) => a.sequence - b.sequence);

export default navigation;
