import React from "react";

export default function ImageOptim({src, alt, className="", style={}, priority=false}){
    const webp = src.replace(/(\.png|\.jpg|\.jpge)$/i, ".webp");
    return(
        <picture>
            <source srcSet={src} type="image/webp"/>
            <img 
                src={src} 
                alt={alt}
                className={className}
                style={style}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "low"} />
        </picture>
    );
}