/**
 * Downloads the CV file reliably across all browsers and devices.
 * Uses fetch + blob URL to force an immediate browser file download (avoiding inline PDF viewer override),
 * with graceful fallback to direct link opening in a new tab.
 */
export const downloadCV = async (e) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault()
  }

  const fileName = 'Imasha_Samodee_CV.pdf'
  const fileUrl = `${import.meta.env.BASE_URL}Imasha_Samodee_CV.pdf`

  try {
    const response = await fetch(fileUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch CV file: ${response.status}`)
    }
    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobUrl
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Revoke blob URL after download is triggered
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl)
    }, 2000)
    return true
  } catch (error) {
    console.warn('Blob download fallback triggered:', error)
    // Fallback: direct anchor download or open in new tab
    const fallback = document.createElement('a')
    fallback.href = fileUrl
    fallback.setAttribute('download', fileName)
    fallback.target = '_blank'
    fallback.rel = 'noopener noreferrer'
    document.body.appendChild(fallback)
    fallback.click()
    document.body.removeChild(fallback)
    return false
  }
}
