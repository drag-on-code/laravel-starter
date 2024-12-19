const widgets = import.meta.glob('/modules/**/components/*-dashboard-widget.vue', { eager: true })
const Widget = {};

for (let name in widgets) {
    let path = name.replace(/(\.\/|\.vue)/g, "");
    let filename = path.substring(path.lastIndexOf('/') + 1);
    Widget[filename] = widgets[name].default;
}

export default Widget
