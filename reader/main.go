package main

import (
	"fmt"
	"image"
	_ "image/jpeg"
	_ "image/png"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

const dir_to_scan string = "../docs/images/high-quality"

// this outputs an array needed in the javascript of the website
func main() {
    files, _ := ioutil.ReadDir(dir_to_scan)
	firstTime := true
    for _, imgFile := range files {
		if firstTime {
			fmt.Printf("[")
			firstTime = false
		}else{
			fmt.Printf(",")
		}
        if reader, err := os.Open(filepath.Join(dir_to_scan, imgFile.Name())); err == nil {
            defer reader.Close()
            im, _, err := image.DecodeConfig(reader)
            if err != nil {
                fmt.Fprintf(os.Stderr, "%s: %v\n", imgFile.Name(), err)
                break
            }
			fileName := strings.TrimSuffix(imgFile.Name(), filepath.Ext(imgFile.Name()))
			trueHeight := ((450*im.Height)/im.Width)
            fmt.Printf("{name: \"%s\", format: \"%s\", height: \"%d\"}", fileName, filepath.Ext(imgFile.Name()), trueHeight)
        } else {
            fmt.Println("Impossible to open the file:", err)
			break
        }
    }
	fmt.Printf("]")
}