import React, { Fragment } from 'react'
import Link from 'next/link'

import { Page, Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Message } from '../../_components/Message'
import { Price } from '../../_components/Price'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'
import { CMSLink } from '../../_components/Link'

const CustomtHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
    
  return (
    <section className={classes.hero}>
      <div className={classes.heroWrapper} style={{ backgroundImage: `url(${mediaUrl})` }}>
        <div className={classes.heroTextBox}>
          <RichText content={richText} />

          {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
      // <Gutter className={classes.productHero}>
        
      //   <div className={classes.media}>
      //     <div className={classes.mediaWrapper}>
      //       {!metaImage && <div className={classes.placeholder}>No image</div>}
      //       {metaImage && typeof metaImage !== 'string' && (
      //         <Media imgClassName={classes.image} resource={metaImage} fill />
      //       )}
      //     </div>
      //     {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
      //       <RichText content={metaImage.caption} className={classes.caption} />
      //     )}
      //   </div>
      // </Gutter>
  )
}

export default CustomtHero;