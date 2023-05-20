import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="tss-header flex-row justify-content-center align-items-center">
      <div className="logo">
        <NavLink to="/">
          <svg className="tss-logo">
            <g className="boba-icon" transform="translate(120,0)">
              <svg
                width="60"
                height="90"
                className="image-svg-svg primary boba-svg"
                style={{ overflow: "visible" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="96 16 320 480.0000305175781"
                  x="0px"
                  y="0px"
                >
                  <path d="M392,128H288V24a8,8,0,0,0-8-8H232a8,8,0,0,0-8,8V128H120a24.027,24.027,0,0,0-24,24v16a8,8,0,0,0,8,8h16.39l13.339,266.8A55.96,55.96,0,0,0,189.66,496H322.34a55.96,55.96,0,0,0,55.931-53.2L391.61,176H408a8,8,0,0,0,8-8V152A24.028,24.028,0,0,0,392,128ZM240,32h32v96H240Zm0,192V176h32v48Zm-16,0H138.81l-2.4-48H224ZM362.29,442a39.969,39.969,0,0,1-39.95,38H189.66a39.97,39.97,0,0,1-39.95-38l-10.1-202H372.39Zm10.9-218H288V176h87.59ZM400,160H112v-8a8.009,8.009,0,0,1,8-8H392a8.009,8.009,0,0,1,8,8Z"></path>
                  <path d="M192,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,192,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,192,448Z"></path>
                  <path d="M240,384a24,24,0,1,0-24,24A24.027,24.027,0,0,0,240,384Zm-24,8a8,8,0,1,1,8-8A8.009,8.009,0,0,1,216,392Z"></path>
                  <path d="M296,408a24,24,0,1,0-24-24A24.028,24.028,0,0,0,296,408Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,296,376Z"></path>
                  <path d="M256,416a24,24,0,1,0,24,24A24.027,24.027,0,0,0,256,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,256,448Z"></path>
                  <path d="M320,416a24,24,0,1,0,24,24A24.028,24.028,0,0,0,320,416Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,320,448Z"></path>
                </svg>
              </svg>
            </g>
            <g transform="translate(50,96.99954986572266)">
              <g className="tss-name" transform="translate(0,0), scale(1)">
                <path
                  d="M0.84-18.37L14.32-18.37 14.32-15.4 9.42-15.4 9.42 0 5.74 0 5.74-15.4 0.84-15.4 0.84-18.37ZM25.21-14.79Q26.87-14.79 28.16-14.07 29.45-13.34 30.18-11.94 30.9-10.53 30.9-8.55L30.9-8.55 30.9 0 27.21 0 27.21-8.05Q27.21-9.79 26.35-10.73 25.48-11.66 23.98-11.66L23.98-11.66Q22.45-11.66 21.57-10.73 20.69-9.79 20.69-8.05L20.69-8.05 20.69 0 17 0 17-19.48 20.69-19.48 20.69-12.77Q21.4-13.71 22.58-14.25 23.77-14.79 25.21-14.79L25.21-14.79ZM47.95-7.61Q47.95-6.82 47.85-6.19L47.85-6.19 37.19-6.19Q37.32-4.61 38.3-3.71 39.27-2.82 40.69-2.82L40.69-2.82Q42.74-2.82 43.61-4.58L43.61-4.58 47.59-4.58Q46.95-2.47 45.16-1.12 43.37 0.24 40.77 0.24L40.77 0.24Q38.66 0.24 36.99-0.7 35.32-1.63 34.39-3.34 33.45-5.05 33.45-7.29L33.45-7.29Q33.45-9.55 34.37-11.26 35.29-12.98 36.95-13.9 38.61-14.82 40.77-14.82L40.77-14.82Q42.85-14.82 44.49-13.92 46.14-13.03 47.05-11.38 47.95-9.74 47.95-7.61L47.95-7.61ZM37.22-8.66L44.14-8.66Q44.11-10.08 43.11-10.94 42.11-11.79 40.66-11.79L40.66-11.79Q39.3-11.79 38.36-10.96 37.43-10.13 37.22-8.66L37.22-8.66ZM63.25 0.18Q61.32 0.18 59.79-0.47 58.25-1.13 57.35-2.37 56.46-3.61 56.43-5.29L56.43-5.29 60.38-5.29Q60.46-4.16 61.18-3.5 61.9-2.84 63.17-2.84L63.17-2.84Q64.46-2.84 65.19-3.46 65.93-4.08 65.93-5.08L65.93-5.08Q65.93-5.9 65.43-6.42 64.93-6.95 64.18-7.25 63.43-7.55 62.11-7.92L62.11-7.92Q60.32-8.45 59.21-8.96 58.09-9.48 57.28-10.51 56.48-11.55 56.48-13.29L56.48-13.29Q56.48-14.92 57.3-16.13 58.11-17.34 59.59-17.99 61.06-18.63 62.96-18.63L62.96-18.63Q65.8-18.63 67.58-17.25 69.35-15.87 69.54-13.4L69.54-13.4 65.48-13.4Q65.43-14.34 64.68-14.96 63.93-15.58 62.69-15.58L62.69-15.58Q61.61-15.58 60.97-15.03 60.32-14.48 60.32-13.42L60.32-13.42Q60.32-12.69 60.81-12.2 61.3-11.71 62.02-11.41 62.75-11.11 64.06-10.71L64.06-10.71Q65.85-10.19 66.98-9.66 68.12-9.13 68.93-8.08 69.75-7.03 69.75-5.32L69.75-5.32Q69.75-3.84 68.98-2.58 68.22-1.32 66.75-0.57 65.27 0.18 63.25 0.18L63.25 0.18ZM89.62-14.58L93.15-14.58 88.88 0 84.91 0 82.25-10.19 79.59 0 75.59 0 71.3-14.58 75.04-14.58 77.62-3.47 80.41-14.58 84.3-14.58 87.04-3.5 89.62-14.58ZM108.7-7.61Q108.7-6.82 108.59-6.19L108.59-6.19 97.94-6.19Q98.07-4.61 99.04-3.71 100.01-2.82 101.44-2.82L101.44-2.82Q103.49-2.82 104.36-4.58L104.36-4.58 108.33-4.58Q107.7-2.47 105.91-1.12 104.12 0.24 101.51 0.24L101.51 0.24Q99.41 0.24 97.74-0.7 96.07-1.63 95.13-3.34 94.2-5.05 94.2-7.29L94.2-7.29Q94.2-9.55 95.12-11.26 96.04-12.98 97.7-13.9 99.36-14.82 101.51-14.82L101.51-14.82Q103.59-14.82 105.24-13.92 106.88-13.03 107.79-11.38 108.7-9.74 108.7-7.61L108.7-7.61ZM97.96-8.66L104.88-8.66Q104.86-10.08 103.86-10.94 102.86-11.79 101.41-11.79L101.41-11.79Q100.04-11.79 99.11-10.96 98.17-10.13 97.96-8.66L97.96-8.66ZM124.94-7.61Q124.94-6.82 124.83-6.19L124.83-6.19 114.17-6.19Q114.31-4.61 115.28-3.71 116.25-2.82 117.68-2.82L117.68-2.82Q119.73-2.82 120.6-4.58L120.6-4.58 124.57-4.58Q123.94-2.47 122.15-1.12 120.36 0.24 117.75 0.24L117.75 0.24Q115.65 0.24 113.98-0.7 112.31-1.63 111.37-3.34 110.44-5.05 110.44-7.29L110.44-7.29Q110.44-9.55 111.36-11.26 112.28-12.98 113.94-13.9 115.6-14.82 117.75-14.82L117.75-14.82Q119.83-14.82 121.48-13.92 123.12-13.03 124.03-11.38 124.94-9.74 124.94-7.61L124.94-7.61ZM114.2-8.66L121.12-8.66Q121.1-10.08 120.1-10.94 119.1-11.79 117.65-11.79L117.65-11.79Q116.28-11.79 115.35-10.96 114.41-10.13 114.2-8.66L114.2-8.66ZM135.18-11.55L131.91-11.55 131.91-4.5Q131.91-3.76 132.27-3.43 132.62-3.11 133.47-3.11L133.47-3.11 135.18-3.11 135.18 0 132.86 0Q128.2 0 128.2-4.53L128.2-4.53 128.2-11.55 126.47-11.55 126.47-14.58 128.2-14.58 128.2-18.19 131.91-18.19 131.91-14.58 135.18-14.58 135.18-11.55ZM150.44 0.18Q148.52 0.18 146.98-0.47 145.44-1.13 144.55-2.37 143.65-3.61 143.63-5.29L143.63-5.29 147.57-5.29Q147.65-4.16 148.38-3.5 149.1-2.84 150.36-2.84L150.36-2.84Q151.65-2.84 152.39-3.46 153.13-4.08 153.13-5.08L153.13-5.08Q153.13-5.9 152.63-6.42 152.13-6.95 151.38-7.25 150.63-7.55 149.31-7.92L149.31-7.92Q147.52-8.45 146.4-8.96 145.28-9.48 144.48-10.51 143.68-11.55 143.68-13.29L143.68-13.29Q143.68-14.92 144.49-16.13 145.31-17.34 146.78-17.99 148.26-18.63 150.15-18.63L150.15-18.63Q153-18.63 154.77-17.25 156.55-15.87 156.73-13.4L156.73-13.4 152.68-13.4Q152.63-14.34 151.88-14.96 151.13-15.58 149.89-15.58L149.89-15.58Q148.81-15.58 148.17-15.03 147.52-14.48 147.52-13.42L147.52-13.42Q147.52-12.69 148.01-12.2 148.5-11.71 149.22-11.41 149.94-11.11 151.26-10.71L151.26-10.71Q153.05-10.19 154.18-9.66 155.31-9.13 156.13-8.08 156.94-7.03 156.94-5.32L156.94-5.32Q156.94-3.84 156.18-2.58 155.42-1.32 153.94-0.57 152.47 0.18 150.44 0.18L150.44 0.18ZM163.81-12.48Q164.52-13.48 165.77-14.15 167.02-14.82 168.63-14.82L168.63-14.82Q170.5-14.82 172.01-13.9 173.53-12.98 174.41-11.28 175.29-9.58 175.29-7.34L175.29-7.34Q175.29-5.11 174.41-3.38 173.53-1.66 172.01-0.71 170.5 0.24 168.63 0.24L168.63 0.24Q167.02 0.24 165.8-0.42 164.58-1.08 163.81-2.08L163.81-2.08 163.81 6.95 160.13 6.95 160.13-14.58 163.81-14.58 163.81-12.48ZM171.53-7.34Q171.53-8.66 170.99-9.62 170.45-10.58 169.56-11.08 168.68-11.58 167.66-11.58L167.66-11.58Q166.66-11.58 165.77-11.07 164.89-10.55 164.35-9.58 163.81-8.61 163.81-7.29L163.81-7.29Q163.81-5.97 164.35-5 164.89-4.03 165.77-3.51 166.66-3 167.66-3L167.66-3Q168.68-3 169.56-3.53 170.45-4.05 170.99-5.03 171.53-6 171.53-7.34L171.53-7.34ZM184.45 0.24Q182.34 0.24 180.66-0.7 178.97-1.63 178.01-3.34 177.05-5.05 177.05-7.29L177.05-7.29Q177.05-9.53 178.04-11.24 179.03-12.95 180.74-13.88 182.45-14.82 184.55-14.82L184.55-14.82Q186.66-14.82 188.37-13.88 190.08-12.95 191.07-11.24 192.05-9.53 192.05-7.29L192.05-7.29Q192.05-5.05 191.04-3.34 190.03-1.63 188.3-0.7 186.58 0.24 184.45 0.24L184.45 0.24ZM184.45-2.97Q185.45-2.97 186.33-3.46 187.21-3.95 187.74-4.92 188.26-5.9 188.26-7.29L188.26-7.29Q188.26-9.37 187.17-10.49 186.08-11.61 184.5-11.61L184.5-11.61Q182.92-11.61 181.86-10.49 180.79-9.37 180.79-7.29L180.79-7.29Q180.79-5.21 181.83-4.09 182.87-2.97 184.45-2.97L184.45-2.97ZM202.32-11.55L199.06-11.55 199.06-4.5Q199.06-3.76 199.41-3.43 199.77-3.11 200.61-3.11L200.61-3.11 202.32-3.11 202.32 0 200 0Q195.34 0 195.34-4.53L195.34-4.53 195.34-11.55 193.61-11.55 193.61-14.58 195.34-14.58 195.34-18.19 199.06-18.19 199.06-14.58 202.32-14.58 202.32-11.55Z"
                  transform="translate(-0.8400000333786011, 19.479999542236328)"
                ></path>
              </g>
              <g
                className="tss-slogan"
                transform="translate(5,32.43000030517578)"
              >
                <rect
                  x="0"
                  height="1"
                  y="3.580000400543213"
                  width="63.46500587463379"
                ></rect>
                <rect
                  height="1"
                  y="3.580000400543213"
                  width="63.46500587463379"
                  x="128.01500511169434"
                ></rect>
                <g transform="translate(66.46500587463379,0), scale(1)">
                  <path
                    d="M1.08-7.87L1.08 0L3.59 0C4.03 0 4.43-0.05 4.80-0.14C5.17-0.24 5.48-0.38 5.75-0.58C6.01-0.77 6.22-1.01 6.36-1.30C6.50-1.58 6.58-1.92 6.58-2.30C6.58-2.85 6.42-3.28 6.10-3.59C5.78-3.90 5.33-4.10 4.75-4.19L4.75-4.24C5.22-4.36 5.56-4.57 5.78-4.89C6.01-5.21 6.12-5.56 6.12-5.95C6.12-6.30 6.05-6.59 5.92-6.83C5.79-7.08 5.61-7.28 5.37-7.43C5.13-7.58 4.85-7.69 4.52-7.76C4.19-7.84 3.82-7.87 3.42-7.87ZM3.24-4.51L2.08-4.51L2.08-7.08L3.29-7.08C3.90-7.08 4.37-6.99 4.67-6.80C4.98-6.61 5.14-6.30 5.14-5.87C5.14-5.43 4.99-5.09 4.70-4.86C4.41-4.63 3.92-4.51 3.24-4.51ZM3.44-0.79L2.08-0.79L2.08-3.77L3.44-3.77C4.14-3.77 4.67-3.65 5.04-3.43C5.41-3.20 5.59-2.84 5.59-2.35C5.59-1.82 5.40-1.42 5.03-1.17C4.65-0.92 4.12-0.79 3.44-0.79ZM11.04 0.14C11.54 0.14 11.99 0.05 12.40-0.14C12.81-0.34 13.17-0.61 13.47-0.97C13.77-1.32 14.00-1.75 14.17-2.26C14.33-2.77 14.41-3.34 14.41-3.97C14.41-4.60 14.33-5.16 14.17-5.66C14.00-6.16 13.77-6.58 13.47-6.93C13.17-7.28 12.81-7.55 12.40-7.73C11.99-7.92 11.54-8.02 11.04-8.02C10.54-8.02 10.09-7.92 9.68-7.74C9.27-7.56 8.91-7.29 8.62-6.94C8.32-6.59 8.09-6.17 7.93-5.67C7.76-5.17 7.68-4.60 7.68-3.97C7.68-3.34 7.76-2.77 7.93-2.26C8.09-1.75 8.32-1.32 8.62-0.97C8.91-0.61 9.27-0.34 9.68-0.14C10.09 0.05 10.54 0.14 11.04 0.14ZM11.04-0.73C10.69-0.73 10.37-0.81 10.09-0.96C9.80-1.11 9.56-1.33 9.35-1.61C9.15-1.90 8.99-2.24 8.88-2.63C8.77-3.03 8.71-3.48 8.71-3.97C8.71-4.46 8.77-4.90 8.88-5.29C8.99-5.68 9.15-6.02 9.35-6.29C9.56-6.56 9.80-6.77 10.09-6.92C10.37-7.07 10.69-7.14 11.04-7.14C11.39-7.14 11.71-7.07 11.99-6.92C12.28-6.77 12.52-6.56 12.73-6.29C12.93-6.02 13.09-5.68 13.20-5.29C13.31-4.90 13.37-4.46 13.37-3.97C13.37-3.48 13.31-3.03 13.20-2.63C13.09-2.24 12.93-1.90 12.73-1.61C12.52-1.33 12.28-1.11 11.99-0.96C11.71-0.81 11.39-0.73 11.04-0.73ZM16.10-7.87L16.10 0L18.61 0C19.05 0 19.46-0.05 19.82-0.14C20.19-0.24 20.51-0.38 20.77-0.58C21.04-0.77 21.24-1.01 21.38-1.30C21.53-1.58 21.60-1.92 21.60-2.30C21.60-2.85 21.44-3.28 21.12-3.59C20.80-3.90 20.35-4.10 19.78-4.19L19.78-4.24C20.24-4.36 20.58-4.57 20.81-4.89C21.03-5.21 21.14-5.56 21.14-5.95C21.14-6.30 21.08-6.59 20.95-6.83C20.81-7.08 20.63-7.28 20.39-7.43C20.16-7.58 19.87-7.69 19.54-7.76C19.21-7.84 18.84-7.87 18.44-7.87ZM18.26-4.51L17.10-4.51L17.10-7.08L18.31-7.08C18.93-7.08 19.39-6.99 19.70-6.80C20.01-6.61 20.16-6.30 20.16-5.87C20.16-5.43 20.01-5.09 19.72-4.86C19.43-4.63 18.94-4.51 18.26-4.51ZM18.47-0.79L17.10-0.79L17.10-3.77L18.47-3.77C19.16-3.77 19.70-3.65 20.06-3.43C20.43-3.20 20.62-2.84 20.62-2.35C20.62-1.82 20.43-1.42 20.05-1.17C19.68-0.92 19.15-0.79 18.47-0.79ZM26.51-3.20L24.14-3.20L24.52-4.40C24.66-4.84 24.80-5.28 24.92-5.72C25.05-6.15 25.18-6.60 25.30-7.06L25.34-7.06C25.47-6.60 25.60-6.15 25.73-5.72C25.86-5.28 25.99-4.84 26.14-4.40ZM26.76-2.40L27.50 0L28.57 0L25.91-7.87L24.78-7.87L22.12 0L23.14 0L23.89-2.40ZM32.14-1.72L31.54-1.02C31.88-0.66 32.29-0.38 32.76-0.17C33.23 0.04 33.74 0.14 34.30 0.14C34.71 0.14 35.08 0.09 35.41-0.03C35.74-0.15 36.02-0.31 36.25-0.51C36.48-0.71 36.66-0.95 36.79-1.22C36.91-1.50 36.97-1.79 36.97-2.10C36.97-2.39 36.93-2.64 36.85-2.86C36.76-3.08 36.65-3.27 36.50-3.44C36.36-3.60 36.19-3.75 35.99-3.87C35.79-3.99 35.58-4.10 35.35-4.20L34.24-4.68C34.08-4.74 33.92-4.81 33.77-4.89C33.62-4.97 33.48-5.05 33.35-5.15C33.22-5.25 33.12-5.37 33.04-5.50C32.97-5.63 32.93-5.80 32.93-5.99C32.93-6.35 33.06-6.63 33.33-6.83C33.60-7.04 33.95-7.14 34.39-7.14C34.76-7.14 35.09-7.07 35.38-6.94C35.67-6.81 35.94-6.63 36.18-6.40L36.72-7.04C36.44-7.33 36.10-7.57 35.70-7.75C35.30-7.93 34.86-8.02 34.39-8.02C34.03-8.02 33.70-7.96 33.40-7.86C33.10-7.76 32.84-7.61 32.62-7.42C32.40-7.23 32.23-7.01 32.11-6.76C31.98-6.50 31.92-6.22 31.92-5.93C31.92-5.64 31.97-5.39 32.06-5.17C32.16-4.95 32.28-4.76 32.44-4.60C32.59-4.44 32.76-4.30 32.95-4.19C33.14-4.08 33.33-3.98 33.52-3.90L34.64-3.41C34.83-3.32 35.00-3.24 35.16-3.16C35.32-3.08 35.46-2.99 35.57-2.89C35.69-2.79 35.78-2.67 35.85-2.53C35.92-2.39 35.95-2.22 35.95-2.02C35.95-1.63 35.81-1.32 35.52-1.09C35.23-0.85 34.83-0.73 34.31-0.73C33.90-0.73 33.51-0.82 33.13-1.00C32.75-1.18 32.42-1.42 32.14-1.72ZM38.52-7.87L38.52 0L39.52 0L39.52-3.71L43.18-3.71L43.18 0L44.18 0L44.18-7.87L43.18-7.87L43.18-4.57L39.52-4.57L39.52-7.87ZM49.25 0.14C49.74 0.14 50.20 0.05 50.61-0.14C51.02-0.34 51.38-0.61 51.68-0.97C51.98-1.32 52.21-1.75 52.37-2.26C52.54-2.77 52.62-3.34 52.62-3.97C52.62-4.60 52.54-5.16 52.37-5.66C52.21-6.16 51.98-6.58 51.68-6.93C51.38-7.28 51.02-7.55 50.61-7.73C50.20-7.92 49.74-8.02 49.25-8.02C48.75-8.02 48.30-7.92 47.89-7.74C47.47-7.56 47.12-7.29 46.82-6.94C46.53-6.59 46.30-6.17 46.13-5.67C45.97-5.17 45.89-4.60 45.89-3.97C45.89-3.34 45.97-2.77 46.13-2.26C46.30-1.75 46.53-1.32 46.82-0.97C47.12-0.61 47.47-0.34 47.89-0.14C48.30 0.05 48.75 0.14 49.25 0.14ZM49.25-0.73C48.90-0.73 48.58-0.81 48.29-0.96C48.01-1.11 47.77-1.33 47.56-1.61C47.36-1.90 47.20-2.24 47.09-2.63C46.98-3.03 46.92-3.48 46.92-3.97C46.92-4.46 46.98-4.90 47.09-5.29C47.20-5.68 47.36-6.02 47.56-6.29C47.77-6.56 48.01-6.77 48.29-6.92C48.58-7.07 48.90-7.14 49.25-7.14C49.60-7.14 49.92-7.07 50.20-6.92C50.49-6.77 50.73-6.56 50.93-6.29C51.14-6.02 51.30-5.68 51.41-5.29C51.52-4.90 51.58-4.46 51.58-3.97C51.58-3.48 51.52-3.03 51.41-2.63C51.30-2.24 51.14-1.90 50.93-1.61C50.73-1.33 50.49-1.11 50.20-0.96C49.92-0.81 49.60-0.73 49.25-0.73ZM54.31-7.87L54.31 0L55.31 0L55.31-3.12L56.72-3.12C57.16-3.12 57.55-3.17 57.91-3.27C58.26-3.37 58.57-3.52 58.82-3.72C59.08-3.92 59.28-4.17 59.42-4.48C59.56-4.78 59.63-5.14 59.63-5.56C59.63-5.99 59.56-6.35 59.42-6.65C59.28-6.94 59.08-7.18 58.83-7.36C58.58-7.54 58.27-7.67 57.91-7.75C57.55-7.83 57.16-7.87 56.72-7.87ZM56.60-3.94L55.31-3.94L55.31-7.07L56.60-7.07C57.28-7.07 57.79-6.96 58.13-6.74C58.46-6.52 58.63-6.12 58.63-5.56C58.63-5.00 58.47-4.59 58.13-4.33C57.80-4.07 57.29-3.94 56.60-3.94Z"
                    transform="translate(-1.08, 8.016)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
