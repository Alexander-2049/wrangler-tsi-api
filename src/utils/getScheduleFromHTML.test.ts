import getScheduleFromHTML from './getScheduleFromHTML';
import { describe, it, expect } from '@jest/globals';

describe('getTableFromHTML', () => {
    const sampleHTML = `﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html>
    <head>
    <title>st84964: Transport and Telecommunication Institute Intranet</title>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
    <link href='/css/main.css' rel='stylesheet' type='text/css' >
    
    </head>
    
    <body>
    
      <table class='header'>
        <tr>
          <td class='header' width=100%>
    Student's personal card			
          </td>
          <td>
            <table class='menuLang'>
                <tr>
    <td width=33%><a href='?Lang=lv&page=4&NrStudent=0'>&nbsp;&nbsp;LV&nbsp;&nbsp;</a></td>
        <td width=33%><a href='?Lang=ru&page=4&NrStudent=0'>&nbsp;&nbsp;RU&nbsp;&nbsp;</a></td>
        <td width=33%>&nbsp;&nbsp;EN&nbsp;&nbsp;</td>
                  
                </tr>
            </table>
          </td>
        </tr>
      </table>
    
    
    <div class="menu">
      <ul class='menu'>
    
    <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=1&NrStudent=0'>Personal details</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=2&NrStudent=0'>Contracts</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=3&NrStudent=0'>Bills and payments</a></li>
        <li  class='menu'><a  class='current_page_item' href='index.php?Lang=en&page=4&NrStudent=0'>Schedule</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=5&NrStudent=0'>Rector's orders</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=6&NrStudent=0'>Study at TTI</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=7&NrStudent=0'>Graduation from TTI</a></li>
        <li  class='menu'><a  class='menu' href='index.php?Lang=en&page=8&NrStudent=0'>Print</a></li>
          </ul>
    </div>
    <div class='info' style='height:98%;width:auto;' >	
    
      <FORM id='form1' enctype='multipart/form-data' method='POST' >
            <INPUT type=HIDDEN id='AfterForm' NAME='AfterForm' VALUE='1'>
        <TABLE class='main_table' style='width:780px;margin-top:10px;padding:0px;'>
          <TR>
            <TD style='width:780px;'>
            <TABLE class='main_table' style='widcol:760px;border:none;padding:0px;margin:0px;'>
                <col width='70'></col>
                <col width='50'></col>
                <col width='100'></col>
                <col width='70'></col>
                <col width='30'></col>
                <col width='50'></col>
                <col width='100'></col>
                <col width='70'></col>
                <col width='210'></col>
              <TR>
                <TD class='txt' style='padding-left:10px;'>Period:
                </TD>
                <TD>
    <select class='ask_select' name='dt1' id='dt1' ><option value=1 >1</option><option value=2 >2</option><option value=3 >3</option><option value=4 >4</option><option value=5 >5</option><option value=6 >6</option><option value=7 >7</option><option value=8 >8</option><option value=9 >9</option><option value=10 >10</option><option value=11 >11</option><option value=12 >12</option><option value=13 >13</option><option value=14 >14</option><option value=15 >15</option><option value=16 >16</option><option value=17 >17</option><option value=18 >18</option><option value=19 >19</option><option value=20 selected>20</option><option value=21 >21</option><option value=22 >22</option><option value=23 >23</option><option value=24 >24</option><option value=25 >25</option><option value=26 >26</option><option value=27 >27</option><option value=28 >28</option><option value=29 >29</option><option value=30 >30</option><option value=31 >31</option></select>						</TD>
                <TD>
    <select class='ask_select' name='mn1' id='mn1' ><option value=0 ></option><option value=01 >January</option><option value=02 >February</option><option value=03 >March</option><option value=04 >April</option><option value=05 >May</option><option value=06 >June</option><option value=07 >July</option><option value=08 >August</option><option value=09 >September</option><option value=10 >October</option><option value=11 selected>November</option><option value=12 >December</option></select>						</TD>
                <TD>
    <select class='ask_select' name='yr1' id='yr1' ><option value=2022 >2022</option><option value=2023 selected>2023</option><option value=2024 >2024</option></select>						</TD>
                <TD style='text-align:center;'>-
                </TD>
                <TD>
    <select class='ask_select' name='dt2' id='dt2' ><option value=1 >1</option><option value=2 >2</option><option value=3 >3</option><option value=4 >4</option><option value=5 >5</option><option value=6 >6</option><option value=7 >7</option><option value=8 >8</option><option value=9 >9</option><option value=10 >10</option><option value=11 >11</option><option value=12 >12</option><option value=13 >13</option><option value=14 >14</option><option value=15 >15</option><option value=16 >16</option><option value=17 >17</option><option value=18 >18</option><option value=19 >19</option><option value=20 selected>20</option><option value=21 >21</option><option value=22 >22</option><option value=23 >23</option><option value=24 >24</option><option value=25 >25</option><option value=26 >26</option><option value=27 >27</option><option value=28 >28</option><option value=29 >29</option><option value=30 >30</option><option value=31 >31</option></select>						</TD>
                <TD>
    <select class='ask_select' name='mn2' id='mn2' ><option value=0 ></option><option value=01 >January</option><option value=02 >February</option><option value=03 >March</option><option value=04 >April</option><option value=05 >May</option><option value=06 >June</option><option value=07 >July</option><option value=08 >August</option><option value=09 >September</option><option value=10 >October</option><option value=11 selected>November</option><option value=12 >December</option></select>						</TD>
                <TD>
    <select class='ask_select' name='yr2' id='yr2' ><option value=2022 >2022</option><option value=2023 >2023</option><option value=2024 selected>2024</option></select>						</TD>
                <TD class='txt'>
                </TD>
    
              </TR>
            </TABLE>
            </TD>
            </TR>
            <TR>
            <TD>
            <TABLE class='main_table' style='width:780px;border:none;padding:0px;margin-top:10px;margin-left:0px;'>
                <col width='70'></col>
                <col width='100'></col>
                <col width='130'></col>
                <col width='170'></col>
                <col width='100'></col>
                <col width='80'></col>
                <col width='100'></col>
              <TR>
                <TD class='txt'  style='padding-left:10px;'>Group:
                </TD>
                <TD>
    <select class='ask_select' name='idStudentGroup' id='idStudentGroup' ><option value=0 ></option><option value=1596 >1002-2MDA</option><option value=1482 >1002BDA</option><option value=1483 >1002BNL</option><option value=1595 >1003-2MDA</option><option value=1488 >1003PDA</option><option value=1492 >1003PNL</option><option value=1491 >1004PDL</option><option value=1514 >1005BDL</option><option value=1644 >1102-2BDA</option><option value=1643 >1102-2MDA</option><option value=1602 >1102BDA</option><option value=1604 >1102BNL</option><option value=1616 >1102MDA</option><option value=1651 >1103-2MDA</option><option value=1645 >1103-2PDA</option><option value=1624 >1103MDA</option><option value=1605 >1103PDA</option><option value=1607 >1103PNL</option><option value=1652 >1104-2BNA</option><option value=1630 >1104BNA</option><option value=1622 >1104MDA</option><option value=1606 >1104PDL</option><option value=1603 >1105BDL</option><option value=1697 >1202-2BDA</option><option value=1703 >1202-2MDA</option><option value=1660 >1202BDA</option><option value=1663 >1202BNL</option><option value=1665 >1202MDA</option><option value=1700 >1203-2MDA</option><option value=1702 >1203-2PDA</option><option value=1666 >1203MDA</option><option value=1667 >1203MNL</option><option value=1661 >1203PDA</option><option value=1664 >1203PNL</option><option value=1701 >1204-2MDA</option><option value=1672 >1204BNA</option><option value=1674 >1204MDA</option><option value=1662 >1204PDL</option><option value=1685 >1205BDL</option><option value=1712 >1302BDA</option><option value=1716 >1302BNL</option><option value=1727 >1302MDA</option><option value=1728 >1303MDA</option><option value=1743 >1303MNL</option><option value=1713 >1303PDA</option><option value=1717 >1303PNL</option><option value=1744 >1304BNA</option><option value=1729 >1304MDA</option><option value=1714 >1304PDL</option><option value=1715 >1305BDL</option><option value=1309 >1703PN</option><option value=1306 >1704PNL</option><option value=1361 >1802BN</option><option value=1403 >1803-2PDA</option><option value=1351 >1803PD</option><option value=1363 >1803PN</option><option value=1352 >1804PNL</option><option value=1473 >1902-2BDA</option><option value=1428 >1902BNL</option><option value=1475 >1903-2PDA</option><option value=1430 >1903PDA</option><option value=1435 >1904PDL</option><option value=1431 >1904PNL</option><option value=1629 >1905PNL(LF)</option><option value=1589 >2001-2BDA</option><option value=1494 >2001BDA</option><option value=1615 >2101BDA</option><option value=1628 >2105BDL</option><option value=1668 >2201BDA</option><option value=1742 >2202BDA</option><option value=1684 >2205BDL</option><option value=1718 >2301BDA</option><option value=1734 >2305BDL</option><option value=1397 >2801-2BDA</option><option value=1353 >2801BD</option><option value=1378 >2801BDA</option><option value=1471 >2901-2BDA</option><option value=1433 >2901BDA</option><option value=1507 >2902BDA</option><option value=1594 >3001-2MDA</option><option value=1516 >3001BDA</option><option value=1499 >3003PDA</option><option value=1650 >3003PNA</option><option value=1621 >3101MDA</option><option value=1614 >3102BNA</option><option value=1613 >3103PDA</option><option value=1673 >3201MDA</option><option value=1669 >3202BDA</option><option value=1671 >3202BNA</option><option value=1735 >3203BNA</option><option value=1670 >3203PDA</option><option value=1722 >3301BDA</option><option value=1725 >3301BNA</option><option value=1733 >3301MDA</option><option value=1723 >3303BDA</option><option value=1465 >3701PN</option><option value=1355 >3801BPD</option><option value=1509 >3801BPN</option><option value=1356 >3802BPN</option><option value=1418 >3901BDA</option><option value=1420 >3903PDA</option><option value=1588 >4001-2BDA</option><option value=1593 >4001-2BNA</option><option value=1500 >4001BDA</option><option value=1502 >4001BNL</option><option value=1513 >4001MNA</option><option value=1590 >4002-2MDA</option><option value=1512 >4002BNA</option><option value=1505 >4002MNA</option><option value=1517 >4003BDA</option><option value=1646 >4101-2BDA</option><option value=1647 >4101-2BNA</option><option value=1641 >4101-2MDA</option><option value=1608 >4101BDA</option><option value=1611 >4101BNA</option><option value=1617 >4101MDA</option><option value=1618 >4101MNA</option><option value=1653 >4102-2MDA</option><option value=1642 >4102-2MNA</option><option value=1609 >4102BDA</option><option value=1625 >4102BNL</option><option value=1619 >4102MDA</option><option value=1620 >4102MNA</option><option value=1610 >4103BDA</option><option value=1698 >4201-2BDA</option><option value=1704 >4201-2MDA</option><option value=1675 >4201BDA</option><option value=1678 >4201BNA</option><option value=1679 >4201MDA</option><option value=1699 >4202-2MDA</option><option value=1676 >4202BDA</option><option value=1683 >4202BNL</option><option value=1681 >4202MDA</option><option value=1682 >4202MNA</option><option value=1677 >4203BDA</option><option value=1686 >4203MDA</option><option value=1693 >4205MDF</option><option value=1719 >4301BDA</option><option value=1724 >4301BNA</option><option value=1745 >4301MNA</option><option value=1720 >4302BDA</option><option value=1726 >4302BNL</option><option value=1732 >4302MDA</option><option value=1746 >4302MNA</option><option value=1721 >4303BDA</option><option value=1731 >4303MDA</option><option value=1202 >4509SD</option><option value=1292 >4701BN</option><option value=1347 >4801BD</option><option value=1349 >4801BN</option><option value=1348 >4802BD</option><option value=1368 >4802BNL</option><option value=1472 >4901-2BDA</option><option value=1421 >4901BDA</option><option value=1422 >4902BDA</option><option value=1436 >4902BNL</option></select>						</TD>
                <TD class='txt_sh'>Lecturer:
                </TD>
                <TD>
    <select class='ask_select' name='idLecturer' id='idLecturer' ><option value=0 ></option><option value=34284 >Ahrems Janeks</option><option value=31173 >Alomar Iyad</option><option value=7484 >Astratova Olga</option><option value=15582 >Baranova Jeļena</option><option value=28708 >Belihins Mihails</option><option value=44577 >Bezdel Anton</option><option value=31232 >Bočarovs Dmitrijs</option><option value=43341 >Bruņa Silvija</option><option value=34223 >Budiloviča Evelīna</option><option value=23076 >Burakovs Georgijs</option><option value=17005 >Dribeņeca Olga</option><option value=38730 >Elmenshawy Adham Ahmed Awad Elsayed</option><option value=39857 >Gabelaia Ioseb</option><option value=20593 >Gavrilovs Dmitrijs</option><option value=39896 >Gercevs Ivans</option><option value=7680 >Gončarova Elīna</option><option value=15627 >Grakovskis Aleksandrs</option><option value=25187 >Gredasovs Vasilijs</option><option value=43342 >Gromov Dmitry</option><option value=43294 >Gromova Ekaterina</option><option value=19224 >Gromovs Genadijs</option><option value=9711 >Gudanets Nikolay</option><option value=43318 >Indrika Renāte</option><option value=15572 >Ishmuhametov Ishgalei</option><option value=33490 >Ivanovs Artjoms</option><option value=9710 >Jackiva Irina</option><option value=42603 >Jacob Christy Oommen</option><option value=18797 >Junusovs Sergey</option><option value=7217 >Kabaškins Igors</option><option value=30391 >Kanels Juris</option><option value=9728 >Kijonoka Jeļena</option><option value=42182 >Kirvelaite Vaiva</option><option value=33941 >Kokars Artūrs</option><option value=32151 >Konovalova Natālija</option><option value=11292 >Kostjkina Karina</option><option value=38993 >Kotļars Aleksandrs</option><option value=15647 >Koževņikova Marina</option><option value=9720 >Kraiņukovs Aleksandrs</option><option value=23205 >Krivčenkovs Aleksandrs</option><option value=15651 >Kuzmenko Larisa</option><option value=31248 >Kuzmina-Merlino Irina</option><option value=35281 >Lācāne Monta Aleksandra</option><option value=44306 >Leontyev Alexey</option><option value=36723 >Levicka Anna</option><option value=23816 >Lobanova Marija</option><option value=17008 >Ļaksa Igors</option><option value=44578 >Maklakovs Juris</option><option value=9730 >Medvedevs Aleksandrs</option><option value=41575 >Merchan Cruz Emmanuel Alejandro</option><option value=8695 >Mihailovs Andrejs</option><option value=31419 >Mikulko Jevgēnija</option><option value=32219 >Mišāne Tamila</option><option value=9674 >Mišņevs Boriss</option><option value=44723 >Moveh Samuel</option><option value=44197 >Nagaraj Pavithra</option><option value=42234 >Nikiforovs Oļegs</option><option value=40204 >Omar Youssef Yasser Moustafa Kamal Abdelmonem</option><option value=40206 >Ovezmyradov Berdymyrat</option><option value=33867 >Ozoliņš Herberts</option><option value=13366 >Paramonovs Sergejs</option><option value=36729 >Pavasars Ivars</option><option value=26295 >Pavlyuk Dmitry</option><option value=44434 >Peravoshchykau Vasil</option><option value=16491 >Petrovs Vladimirs</option><option value=36886 >Pizika Nadežda</option><option value=15679 >Plise Marina</option><option value=43317 >Plyats Alexander</option><option value=9684 >Podoļakina Nataļja</option><option value=42235 >Popova Irina</option><option value=17590 >Popova Jeļena</option><option value=15684 >Pozdņakova Oksana</option><option value=9713 >Pozdņakovs Anatolijs</option><option value=39839 >Prostaks Jevgenijs</option><option value=10418 >Pticina Irina</option><option value=18211 >Radčenko Igors</option><option value=8070 >Revzina Elena</option><option value=12009 >Romaņeca Inese</option><option value=34573 >Rubens Neil</option><option value=25711 >Ruskevičs Ivans</option><option value=23207 >Sadirbajevs Felikss</option><option value=43615 >Saukāne Santa</option><option value=36908 >Saveļjevs Artūrs</option><option value=8315 >Savrasovs Mihails</option><option value=39340 >Sevastjanovs Igors</option><option value=42167 >Siliņeviča Veronika</option><option value=15768 >Skorobogatova Oksana</option><option value=37335 >Smagina Anželika</option><option value=12504 >Smoļaņinovs Maksims</option><option value=19756 >Solovjovs Jurijs</option><option value=43731 >Soltani MOHAMMAD</option><option value=41418 >Sorokins Aleksandrs</option><option value=7385 >Spiridovska Nadežda</option><option value=31781 >Sproģe Ilze</option><option value=40482 >Stacenko Sergejs</option><option value=41309 >Stecenko Inna</option><option value=15706 >Stukalina Yulia</option><option value=15688 >Šamšina Tatjana</option><option value=13699 >Šarkovskis Sergejs</option><option value=20734 >Tolujevs Jurijs</option><option value=42732 >Turno Francesco Maria</option><option value=15718 >Utehins Georgs</option><option value=17183 >Vesjolijs Aleksejs</option><option value=43319 >Vestermane Jekaterina</option><option value=32011 >Zervina Olga</option><option value=39531 >Zimņikova Irina</option></select>						</TD>
                <TD class='txt_sh'>Room:
                </TD>
                <TD>
    <select class='ask_select' name='idApartment' id='idApartment' ><option value=0 ></option><option value=206 >01</option><option value=207 >02</option><option value=208 >03</option><option value=218 >06</option><option value=219 >07</option><option value=205 >101</option><option value=216 >105</option><option value=12 >106</option><option value=169 >130</option><option value=148 >220</option><option value=144 >221</option><option value=145 >222</option><option value=146 >223</option><option value=151 >224</option><option value=149 >226</option><option value=150 >227</option><option value=41 >304</option><option value=35 >305</option><option value=10 >306</option><option value=74 >503</option><option value=75 >505</option><option value=79 >703</option><option value=140 >710</option><option value=81 >903</option><option value=82 >906</option><option value=8 >I</option><option value=71 >II</option><option value=72 >III</option><option value=161 >L1 (125)</option><option value=210 >L2 (125)</option><option value=211 >L3 (125)</option><option value=212 >L4 (125)</option><option value=213 >L5 (125)</option><option value=214 >L6 (125)</option><option value=215 >L7 (125)</option><option value=159 >L8 (125)</option><option value=162 >L9 (125)</option></select>						</TD>
                <TD class='txt'>
                  <button class='message' type="submit" form="form1">Show</button>
                </TD>
    
              </TR>
            </TABLE>
          </TD>
        </TR>
    
        <TR>
          <TD colspan=9 class='advert' >			</TD>
        </TR>
    
    
      </TABLE>					                     
      </FORM>
    
      <TABLE class='main_table' style='width:690px;margin-top:10px;margin-bottom:20px;margin-left:0px;padding:0px;'>
        <TR >
          <TH style='width:80px;'>
          Date			</TH>
          <TH style='width:50px;'>
          Class			</TH>
          <TH style='width:100px;'>
          Time			</TH>
          <TH style='width:80px;'>
          Room			</TH>
          <TH style='width:80px;'>
          Group			</TH>
          <TH style='width:150px;'>
          Lecturer			</TH>
          <TH style='width:250px;'>
          Subject			</TH>
          <TH style='width:250px;'>
          Type of the class			</TH>
          <TH style='width:100px;'>
          Comment			</TH>
        </TR>
        
    
    <TR>
        <TD class='sh0'>20.11.2023
        </TD>
        <TD class='sh0'>1
        </TD>
        <TD class='sh0'>8:45-10:15
        </TD>
        <TD class='sh0'>505
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        <TD class='sh0' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>20.11.2023
        </TD>
        <TD class='sh1'>2
        </TD>
        <TD class='sh1'>10:30-12:00
        </TD>
        <TD class='sh1'>505
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        <TD class='sh1' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh0'>20.11.2023
        </TD>
        <TD class='sh0'>3
        </TD>
        <TD class='sh0'>12:30-14:00
        </TD>
        <TD class='sh0'>505
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        <TD class='sh0' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>20.11.2023
        </TD>
        <TD class='sh1'>4
        </TD>
        <TD class='sh1'>14:15-15:45
        </TD>
        <TD class='sh1'>505
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        <TD class='sh1' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh0'>20.11.2023
        </TD>
        <TD class='sh0'>5
        </TD>
        <TD class='sh0'>16:00-17:30
        </TD>
        <TD class='sh0'>505
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        <TD class='sh0' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>20.11.2023
        </TD>
        <TD class='sh1'>6
        </TD>
        <TD class='sh1'>18:15-19:45
        </TD>
        <TD class='sh1'>505
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        <TD class='sh1' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh0'>20.11.2023
        </TD>
        <TD class='sh0'>7
        </TD>
        <TD class='sh0'>20:00-21:30
        </TD>
        <TD class='sh0'>505
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0'>
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        <TD class='sh0' style='text-align:left;'>Renovation
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>21.11.2023
        </TD>
        <TD class='sh1'>1
        </TD>
        <TD class='sh1'>8:45-10:15
        </TD>
        <TD class='sh1'>105
        </TD>
        <TD class='sh1'>2001-2BDA<BR>2001BDA
        </TD>
        <TD class='sh1'>Elmenshawy Adham Ahmed Awad Elsayed
        </TD>
        <TD class='sh1' style='text-align:left;'>Engineering Modelling and Simulation
        </TD>
        <TD class='sh1' style='text-align:left;'>Lesson
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh0'>21.11.2023
        </TD>
        <TD class='sh0'>1
        </TD>
        <TD class='sh0'>8:45-10:15
        </TD>
        <TD class='sh0'>L8 (125)
        </TD>
        <TD class='sh0'>2305BDL
        </TD>
        <TD class='sh0'>Ļaksa Igors
        </TD>
        <TD class='sh0' style='text-align:left;'>Electronics Fundamental
        </TD>
        <TD class='sh0' style='text-align:left;'>Lesson
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>21.11.2023
        </TD>
        <TD class='sh1'>1
        </TD>
        <TD class='sh1'>8:45-10:15
        </TD>
        <TD class='sh1'>II
        </TD>
        <TD class='sh1'>3301BDA<BR>3303BDA<BR>4301BDA<BR>4302BDA<BR>1302BDA<BR>1303PDA<BR>2301BDA
        </TD>
        <TD class='sh1'>Gromova Ekaterina
        </TD>
        <TD class='sh1' style='text-align:left;'>Higher Mathematics
        </TD>
        <TD class='sh1' style='text-align:left;'>Lesson
        </TD>
        <TD class='sh1' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh0'>21.11.2023
        </TD>
        <TD class='sh0'>1
        </TD>
        <TD class='sh0'>8:45-10:15
        </TD>
        <TD class='sh0'>503
        </TD>
        <TD class='sh0'>4001BDA<BR>4002BDA
        </TD>
        <TD class='sh0'>Kuzmenko Larisa
        </TD>
        <TD class='sh0' style='text-align:left;'>English for Career Management
        </TD>
        <TD class='sh0' style='text-align:left;'>Lesson
        </TD>
        <TD class='sh0' style='text-align:left;'>
        </TD>
        </TR><TR>
        <TD class='sh1'>21.11.2023
        </TD>
        <TD class='sh1'>1
        </TD>
        <TD class='sh1'>8:45-10:15
        </TD>
        <TD class='sh1'>
        </TD>
        <TD class='sh1'>1203MDA<BR>1103-2MDA
        </TD>
        <TD class='sh1'>Gromovs Genadijs
        </TD>
        <TD class='sh1' style='text-align:left;'>Practice of Organizing Transportation (Specialization by Type of Transport)
        </TD>
        <TD class='sh1' style='text-align:left;'>Lesson
        </TD>
        <TD class='sh1' style='text-align:left;'>online
        </TD>
        </TR></div></body></html>`;

    it('should parse HTML and return an array of lectures', () => {
        const result = getScheduleFromHTML(sampleHTML);

        expect(result[0]).toEqual(
            {
                date: '20.11.2023',
                time: '8:45-10:15',
                class: '1',
                room: '505',
                groups: [],
                teacher: '',
                subject: '',
                type: 'Renovation',
                comment: '',
            },
        );

        expect(result[1]).toEqual(
            {
                date: '20.11.2023',
                time: '10:30-12:00',
                class: '2',
                room: '505',
                groups: [],
                teacher: '',
                subject: '',
                type: 'Renovation',
                comment: '',
            },
        );

        expect(result[7]).toEqual(
            {
                date: '21.11.2023',
                time: '8:45-10:15',
                class: '1',
                room: '105',
                groups: ["2001-2BDA", "2001BDA"],
                teacher: 'Elmenshawy Adham Ahmed Awad Elsayed',
                subject: 'Engineering Modelling and Simulation',
                type: 'Lesson',
                comment: '',
            },
        );

        expect(result[9]).toEqual(
            {
                date: '21.11.2023',
                time: '8:45-10:15',
                class: '1',
                room: 'II',
                groups: ["3301BDA", "3303BDA", "4301BDA", "4302BDA", "1302BDA", "1303PDA", "2301BDA"],
                teacher: 'Gromova Ekaterina',
                subject: 'Higher Mathematics',
                type: 'Lesson',
                comment: '',
            },
        );

        expect(result[11]).toEqual(
            {
                date: '21.11.2023',
                time: '8:45-10:15',
                class: '1',
                room: '',
                groups: ["1203MDA", "1103-2MDA"],
                teacher: 'Gromovs Genadijs',
                subject: 'Practice of Organizing Transportation (Specialization by Type of Transport)',
                type: 'Lesson',
                comment: 'online',
            },
        );

    });

    // Add more test cases as needed for different scenarios

    // Example test case for handling invalid HTML
    it('should handle invalid HTML and return an empty array', () => {
        const result = getScheduleFromHTML('<div>This is not valid HTML</div>');

        // Add your assertions based on the expected result
        expect(result).toEqual([]);
    });
});
