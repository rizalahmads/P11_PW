// Membuat Input Data dengan Tabel persis dengan file Tabel.html

document
document.write("<table>");
document.write("<th>");
document.write("<br>");
document.write("<tr>");
document.write("<td>NIM</td>");
document.write("<td></td>");
document.write("<td><input type='text' id='nim' /></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>NAMA</td>");
document.write("<td></td>");
document.write("<td><input type='text' id='nama' size='40' /></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>JENIS KELAMIN</td>");
document.write("<td></td>");
document.write("<td><input type='radio' name='jk' value='Laki-laki' />Laki-laki");
document.write("<input type='radio' name='jk' value='Perempuan' />Perempuan</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>HOBBY</td>");
document.write("<td></td>");
document.write("<td><input type='checkbox' name='hobby' value='Membaca' />Membaca");
document.write("<input type='checkbox' name='hobby' value='Olahraga' />Olahraga");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td></td>");
document.write("<td><input type='checkbox' name='hobby' value='Berkebun' />Berkebun");
document.write("<input type='checkbox' name='hobby' value='Memasak' />Memasak");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td></td>");
document.write("<td><input type='checkbox' name='hobby' value='Otomotif' />Otomotif");
document.write("<input type='checkbox' name='hobby' value='Game & Komputer' />Game & Komputer");
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>JURUSAN</td>");
document.write("<td></td>");
document.write("<td><select name='jurusan' id=jurusan>");
document.write("<option value=''></option>");
document.write("<option value='Bisnis Manajemen'>Bisnis Manajemen</option>");
document.write("<option value='Ilmu Komputer'>Ilmu Komputer</option>");
document.write("<option value='Sistem Informasi'>Sistem Informasi</option>");
document.write("</select></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Motto</td>");
document.write("<td></td>");
document.write("<td><textarea name='motto' id='motto' cols='30' rows='3'></textarea></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td></td>");
document.write("<td>");
document.write("<input type='button' value='Simpan' onclick='simpan()' /> ");
document.write("<input type='button' value='Reset' onclick='reset()' /> ");
document.write("<input type='button' value='Keluar' onclick='Keluar()' />");
document.write("</td>");
document.write("</tr>");
document.write("</table>");