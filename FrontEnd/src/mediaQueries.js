export const BreakPoints = {
    sm: 411,
    md: 768,
    lg: 991,
}

export const mediaQueries = (key) => {
    return (style) => `@media(max-width:${BreakPoints[key]}px) ${style}`;
}