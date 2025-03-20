import React from "react";

const example = () => {
  return (
    <div className="relative flex flex-col items-center max-w-[285px]">
      <img
        src={CommunityUpdate3}
        alt="Logo CommunityUpdate3"
        className="h-auto max-h-[286px] max-w-[368px]"
      />
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-[#F5F7FA] rounded-lg p-5 shadow-lg w-[110%] h-auto text-center ">
        <Title
          text={"Revamping the Membership Model with Triathlon Australia"}
          fontSize="20px"
          color="#4D4D4D"
          align="center"
        />
        <div className="flex justify-center gap-2">
          <Title
            text={"Readmore"}
            fontSize="20px"
            color="#4CAF4F"
            align="center"
          />
          <img
            src={Right}
            alt="Right"
            className="mt-0.5 max-w-[24px] md:max-w-[32px] h-auto"
          />
        </div>
      </div>
    </div>


    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Caring is the new marketing
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center mb-12">
      {dataCommunityUpdate.map(({ id, title, image, link }) => (
        <div
          key={id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <div className="relative h-56 w-full">
            <img
              src={image}
              alt="imagenes del post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 h-24">
              {title}
            </h3>
            <a
              href={link}
              className="inline-flex items-center text-green-500 font-medium hover:text-green-600 mx-auto"
            >
              Readmore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default example;

//nota expresion de convertir base64 a binario
base64ToBinary(

       substring(
   
           replace(items('Apply_to_each_5')?['ContentBytes'], '"', ''), 
   
           add(indexOf(replace(items('Apply_to_each_5')?['ContentBytes'], '"', ''), 'base64,') , 7), 
   
           sub(length(replace(items('Apply_to_each_5')?['ContentBytes'], '"', '')), add(indexOf(replace(items('Apply_to_each_5')?['ContentBytes'], '"', ''), 'base64,'), 7))
   
       )
   
   )

   Sub InsertarImagenes()
    Dim doc As Document
    Dim tabla As Table
    Dim fila As Integer
    Dim marcador As String
    Dim url String
    Dim celda As Range
    Dim img As InlineShape
    
    ' Referencia al documento activo
    Set doc = ActiveDocument
    
    ' Buscar la tabla donde están los marcadores
    For Each tabla In doc.Tables
        ' Verificar si la tabla contiene el control de repetición
        If tabla.Range.ContentControls.Count > 0 Then
            ' Iterar por las filas de la tabla
            For fila = 2 To tabla.Rows.Count ' Comenzar en la segunda fila (para evitar encabezado)
                ' Obtener el marcador (primera celda de la fila)
                marcador = tabla.Cell(fila, 1).Range.Text
                marcador = Replace(marcador, Chr(13) & Chr(7), "") ' Limpiar caracteres extra

                ' Obtener la ruta de la imagen (segunda celda de la fila)
                url = tabla.Cell(fila, 2).Range.Text
                url Replace(url, Chr(13) & Chr(7), "") ' Limpiar caracteres extra
                
                ' Insertar la imagen si la ruta no está vacía
                If url> "" Then
                    Set celda = tabla.Cell(fila, 2).Range
                    celda.Text = "" ' Limpiar el texto para la imagen
                    
                    ' Insertar imagen en la celda
                    Set img = celda.InlineShapes.AddPicture(FileName:=url, LinkToFile:=False, SaveWithDocument:=True)
                    
                    ' Ajustar tamaño de la imagen (opcional)
                    img.LockAspectRatio = msoTrue
                    img.Width = 100 ' Ajusta el ancho según necesites
                    img.Height = 100 ' Ajusta la altura según necesites
                End If
            Next fila
        End If
    Next tabla
End Sub


Sub InsertarImagenes()
Dim doc As Document
Dim tabla As Table
Dim fila As Integer
Dim marcador As String
Dim url As String
Dim celda As Range
Dim img As InlineShape

' Referencia al documento activo
Set doc = ActiveDocument

' Buscar la tabla donde están los marcadores
For Each tabla In doc.Tables
    ' Verificar si la tabla contiene el control de repetición
    If tabla.Range.ContentControls.Count > 0 Then
        ' Iterar por las filas de la tabla
        For fila = 2 To tabla.Rows.Count ' Comenzar en la segunda fila (para evitar encabezado)
            ' Obtener el marcador (primera celda de la fila)
            marcador = tabla.Cell(fila, 1).Range.Text
            marcador = Replace(marcador, Chr(13) & Chr(7), "") ' Limpiar caracteres extra

            ' Obtener la ruta de la imagen (segunda celda de la fila)
            url = tabla.Cell(fila, 2).Range.Text
            url Replace(url, Chr(13) & Chr(7), "") ' Limpiar caracteres extra
            
            ' Insertar la imagen si la ruta no está vacía
            If url > "" Then
                Set celda = tabla.Cell(fila, 2).Range
                celda.Text = "" ' Limpiar el texto para la imagen
                
                ' Insertar imagen en la celda
                Set img = celda.InlineShapes.AddPicture(FileName:=url, LinkToFile:=False, SaveWithDocument:=True)
                
                ' Ajustar tamaño de la imagen (opcional)
                img.LockAspectRatio = msoTrue
                img.Width = 100 ' Ajusta el ancho según necesites
                img.Height = 100 ' Ajusta la altura según necesites
            End If
        Next fila
    End If
Next tabla
End Sub