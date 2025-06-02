import React, { useState } from "react";

function ExpertProfileForm() {
  // State cho các trường liên kết hồ sơ chuyên môn
  const [links, setLinks] = useState([""]);

  const addLink = () => setLinks([...links, ""]);
  const removeLink = (idx) => setLinks(links.filter((_, i) => i !== idx));
  const handleLinkChange = (idx, value) => {
    const updated = [...links];
    updated[idx] = value;
    setLinks(updated);
  };

  // Để gửi các trường link lên Formspree
  const renderHiddenLinks = () =>
    links.map((link, i) => (
      <input key={i} type="hidden" name={`profile_links[${i}]`} value={link} />
    ));

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg,#f5f8fd 60%,#deebfa 100%)",
      padding: "48px 0"
    }}>
      <style>{`
        .expert-form2-card {
          max-width: 950px;
          margin: auto;
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 12px 36px 0 rgba(43,86,188,.10);
          padding: 46px 32px 34px 32px;
          border: 1.8px solid #e0ecfb;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .expert-form2-title {
          text-align: center;
          color: #2361b4;
          font-weight: 900;
          font-size: 2.05rem;
          letter-spacing: .02em;
          margin-bottom: 32px;
        }
        .expert-form2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
        }
        @media (max-width: 900px) {
          .expert-form2-grid { grid-template-columns: 1fr; gap: 0px; }
        }
        .expert-form2-block {
          background: #f6fafd;
          border-radius: 12px;
          margin-bottom: 18px;
          box-shadow: 0 2px 10px 0 rgba(25,118,210,.07);
          padding: 27px 22px 20px 22px;
          border: 1.3px solid #e6f1fb;
          position: relative;
        }
        .expert-form2-block:not(:last-child):after {
          content: '';
          display: block;
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -14px;
          height: 2.5px;
          background: linear-gradient(90deg,#e3ebf9 30%,#b1cbe6 80%);
          border-radius: 2px;
        }
        .expert-form2-section-title {
          font-size: 1.1rem;
          color: #2173dc;
          font-weight: 700;
          margin: -3px 0 15px 0;
          letter-spacing: .015em;
          border-left: 4.5px solid #2361b4;
          padding-left: 13px;
          background: #eaf4ff;
          border-radius: 6px;
        }
        .expert-form2-label {
          font-weight: 600;
          margin-bottom: 7px;
          color: #255384;
          display: block;
          font-size: 1.05rem;
        }
        .expert-form2-input, .expert-form2-textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1.2px solid #bcd5f3;
          border-radius: 9px;
          font-size: 1rem;
          background: #f8fafd;
          margin-bottom: 20px;
          outline: none;
          box-sizing: border-box;
          transition: border 0.17s, background 0.16s;
        }
        .expert-form2-input:focus, .expert-form2-textarea:focus {
          border-color: #2361b4;
          background: #eaf4ff;
        }
        .expert-form2-btn-add {
          background: #f4faff;
          color: #2173dc;
          border: 1px dashed #86b6eb;
          border-radius: 7px;
          padding: 7px 15px;
          font-size: .97rem;
          font-weight: 600;
          margin-bottom: 12px;
          margin-top: -2px;
          cursor: pointer;
          transition: background 0.17s, color 0.16s;
        }
        .expert-form2-btn-add:hover {
          background: #e0f0ff;
          color: #154679;
        }
        .expert-form2-btn-remove {
          background: #ffeaea;
          color: #d32f2f;
          border: none;
          border-radius: 5px;
          font-size: 1.18rem;
          padding: 0 9px;
          margin-left: 6px;
          cursor: pointer;
          transition: background 0.13s;
        }
        .expert-form2-btn-remove:hover {
          background: #ffc7c7;
        }
        .expert-form2-btn-submit {
          width: 100%;
          padding: 16px 0;
          background: linear-gradient(90deg,#2173dc,#49a8f7 95%);
          color: #fff;
          font-weight: 700;
          font-size: 1.14rem;
          border: none;
          border-radius: 10px;
          box-shadow: 0 7px 28px 0 rgba(33,115,220,.09);
          margin-top: 28px;
          cursor: pointer;
          letter-spacing: .035em;
          transition: background 0.2s, box-shadow 0.22s;
        }
        .expert-form2-btn-submit:hover {
          background: linear-gradient(90deg,#12569a,#2173dc 85%);
          box-shadow: 0 13px 48px 0 rgba(33,115,220,.14);
        }
      `}
      </style>

      <form
        className="expert-form2-card"
        action="https://formspree.io/f/mrbkzdjg"  // Thay endpoint Formspree của bạn!
        method="POST"
        autoComplete="on"
      >
        <div className="expert-form2-title">
          Hồ Sơ Chuyên Gia
        </div>
        {renderHiddenLinks()}
        <div className="expert-form2-grid">

          {/* Bên trái */}
          <div>
            <div className="expert-form2-block">
              <div className="expert-form2-section-title">Thông tin cá nhân</div>
              <label className="expert-form2-label">
                Họ và tên:
                <input type="text" name="fullName" className="expert-form2-input" required placeholder="Nhập họ tên đầy đủ..." />
              </label>
              <label className="expert-form2-label">
                Giới thiệu ngắn về chuyên gia:
                <textarea
                  name="short_bio"
                  rows={3}
                  maxLength={300}
                  className="expert-form2-textarea"
                  required
                  placeholder="Tóm tắt chuyên môn, định hướng, kinh nghiệm nổi bật (dưới 100 từ)..."
                />
              </label>
            </div>

            <div className="expert-form2-block">
              <div className="expert-form2-section-title">Chức danh & Lĩnh vực</div>
              <label className="expert-form2-label">
                Chức danh:
                <input
                  type="text"
                  name="title"
                  className="expert-form2-input"
                  required
                  placeholder="VD: Phó Giáo sư, Chuyên gia AI, ..."
                />
              </label>
              <label className="expert-form2-label">
                Lĩnh vực chuyên môn:
                <input
                  type="text"
                  name="specialization"
                  className="expert-form2-input"
                  required
                  placeholder="VD: CNTT, Khoa học dữ liệu, Luật, ..."
                />
              </label>
              <label className="expert-form2-label">
                Đơn vị công tác hiện tại:
                <input
                  type="text"
                  name="organization"
                  className="expert-form2-input"
                  placeholder="Tên công ty/viện trường hoặc để trống nếu tự do"
                />
              </label>
            </div>
          </div>

          {/* Bên phải */}
          <div>
            <div className="expert-form2-block">
              <div className="expert-form2-section-title">
                Liên kết hồ sơ chuyên môn
              </div>
              {links.map((link, idx) => (
                <div key={idx} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 11 }}>
                  <input
                    type="text"
                    className="expert-form2-input"
                    style={{ marginBottom: 0 }}
                    value={link}
                    onChange={e => handleLinkChange(idx, e.target.value)}
                    placeholder={`Liên kết #${idx + 1} (LinkedIn, Scholar, Portfolio...)`}
                    required={idx === 0}
                  />
                  {links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLink(idx)}
                      className="expert-form2-btn-remove"
                      title="Xoá"
                    >×</button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="expert-form2-btn-add"
                onClick={addLink}
                style={{ marginBottom: 12 }}
              >+ Thêm liên kết</button>
            </div>

            <div className="expert-form2-block">
              <div className="expert-form2-section-title">Email liên hệ</div>
              <label className="expert-form2-label">
                Email:
                <input
                  type="email"
                  name="email"
                  className="expert-form2-input"
                  required
                  placeholder="Email để liên lạc"
                />
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="expert-form2-btn-submit">
          Gửi Hồ Sơ
        </button>
      </form>
    </div>
  );
}

export default ExpertProfileForm;
