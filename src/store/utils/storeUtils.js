export function getQueryString(params) {
    var esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

export function sortFunc(a, b, filter){
    return Number(isNaN(b[filter])
            ? b[filter].slice(0, 4)
            : b[filter])
        - Number(isNaN(b[filter])
            ? a[filter].slice(0, 4)
            : a[filter]);
}