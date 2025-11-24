
// turn idk-what-this-is-called
// into Idk What This Is Called
export function simplifyCodeName(str:string) {
    return str.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

