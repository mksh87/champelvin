import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import es from "date-fns/locale/es";

function CalendarComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const disabledDates = [new Date(2024, 0, 1), new Date(2024, 0, 2)];
  const currentDate = new Date();
  const maxDate = new Date(currentDate.getTime() + 90 * 24 * 60 * 60 * 1000);

  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    if (startDate && endDate) {
      generateWhatsappLink();
    } else {
      setWhatsappLink("");
    }
  }, [startDate, endDate]);

  const generateWhatsappLink = () => {
    if (startDate && endDate) {
      const message = `Hola! Estoy interesado en reservar la cabaña entre el día ${format(
        startDate,
        "dd/MM/yyyy"
      )} y el día ${format(endDate, "dd/MM/yyyy")}. Muchas gracias.`;

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "543515915216"; // Reemplaza esto con el número de teléfono

      const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      setWhatsappLink(link);
    } else {
      setWhatsappLink("");
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;

    if (!isRangeValid(start, end)) {
      alert("El rango de fechas seleccionado es inválido");
      return;
    }

    setStartDate(start);
    setEndDate(end);
    generateWhatsappLink();
  };

  const isDateBlocked = (date) => {
    return (
      date < currentDate ||
      date > maxDate ||
      !disabledDates.some((disabledDate) => isSameDay(disabledDate, date))
    );
  };

  const isRangeValid = (start, end) => {
    const range = getDatesInRange(start, end);
    return !range.some((date) => !isDateBlocked(date));
  };

  const getDatesInRange = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const isSameDay = (dateA, dateB) => {
    return (
      dateA.getDate() === dateB.getDate() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getFullYear() === dateB.getFullYear()
    );
  };

  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-3">Hace tu reserva</h1>
          <p>
            En el siguiente calendario se encuentran las fechas disponibles
            actualmente. Elija un rango de fechas y aparecerá un link para
            continuar su reserva vía WhatsApp.
          </p>
        </div>

        <div className="calendar-container" id="reserva">
          <DatePicker
            inline
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            locale={es}
            minDate={currentDate}
            maxDate={maxDate}
            monthsShown={2}
            filterDate={(date) =>
              date < currentDate || date > maxDate || isDateBlocked(date)
            }
          />
          {startDate && endDate && (
            <p>
              <span>Desde: {format(startDate, "dd/MM/yyyy")}</span> |{" "}
              <span>Hasta: {format(endDate, "dd/MM/yyyy")}</span>
            </p>
          )}
          {startDate && endDate && whatsappLink && (
            <p>
              Puedes reservar vía WhatsApp:{" "}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Enviar mensaje por WhatsApp
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;
