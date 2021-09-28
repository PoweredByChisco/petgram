/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/globalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App =
 () => (<>
   <GlobalStyle />
   <Logo />
   <ListOfCategories />
   <ListOfPhotoCards />
 </>)
